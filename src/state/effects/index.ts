import axios from 'axios';
import React from 'react';
import { TypesFile, TypesLibrary } from '../state';
export * from './local';
export * from './ts-worker';
export * from './transform';

export const wait = (mil: number) =>
  new Promise((resolve) => setTimeout(resolve, mil));

export type SearchResult = {
  package: { name: string; version: string };
  highlight: string;
};
/**
 * npm: search for package by name
 * @param query search query
 * @returns search results
 */
export const search = async (query: string) => {
  try {
    var res = await axios.get<SearchResult[]>(
      'https://api.npms.io/v2/search/suggestions?q=' + query
    );

    return res.data.map((item) => ({
      value: item.package.name,
      label: React.createElement('div', {
        dangerouslySetInnerHTML: { __html: item.highlight },
      }),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export type PackageJson = {
  name: string;
  version: string;
  main: string;
  module: string;
  types: string;
  typings: string;
  dependencies: Record<string, string>;
};
/**
 * loads package.json from unpkg.com
 * @param pkg package name
 * @param version package version, default = *
 * @returns package.json
 */
export const loadPackageJson = async (pkg: string, version: string = '*') => {
  return axios
    .get<PackageJson>(`https://unpkg.com/${pkg}@${version}/package.json`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      return null;
    });
};

/**
 * build types package name
 * @param pkg package name
 * @returns @types/[name]
 */
export const getTypesPackageName = (pkg: string) => {
  if (pkg.startsWith('@types/')) return pkg;
  if (pkg.startsWith('@')) {
    pkg = pkg.substring(1);
  }
  if (pkg.includes('/')) {
    pkg = pkg.replaceAll('/', '__');
  }
  return '@types/' + pkg;
};

/**
 * extracts references from file
 * @param code type definition
 */
function* getReferencedTypes(code: string) {
  const regex = /\/\/\/ <reference path="(.*.d.ts)" \/>/g;
  let arr;
  while ((arr = regex.exec(code)) !== null) {
    yield arr[1];
  }
}

/**
 * loads types-library from unpkg
 * @param pkg package json
 * @returns TypesLibrary | null
 */
export const loadTypesLibrary = async (
  pkg: PackageJson
): Promise<TypesLibrary | null> => {
  // load index file
  const file = await loadTypesFile(
    pkg.name,
    pkg.version,
    pkg.types || pkg.typings
  );
  if (!file) return null;
  // create library
  const library: TypesLibrary = {
    package: pkg.name,
    version: pkg.version,
    files: [file],
  };
  // load references
  for (const reference of getReferencedTypes(file.content)) {
    var ref = await loadTypesFile(pkg.name, pkg.version, reference);
    if (ref) {
      library.files.push(ref);
    }
  }
  return library;
};

/**
 * loads .d.ts file from unpkg
 * @param pkg package name
 * @param version package version
 * @param path types file path
 * @returns TypesLibrary | null
 */
const loadTypesFile = (
  pkg: string,
  version: string,
  path: string
): Promise<TypesFile | null> => {
  if (path.startsWith('./')) {
    path = path.substring(2);
  }
  if (path.startsWith('/')) {
    path = path.substring(1);
  }
  return axios
    .get<string>(`https://unpkg.com/${pkg}@${version}/${path}`)
    .then((res) => ({
      fileName: `file:///node_modules/${pkg}/${path}`,
      content: res.data,
    }))
    .catch((err) => {
      console.error(err);
      return null;
    });
};

var script: HTMLScriptElement | null = null;

export const executeScript = (val: string) => {
  if (script) {
    script.remove();
    script = null;
  }
  script = document.createElement('script');

  script.type = 'module';
  script.innerHTML = val;

  document.head.append(script);
};

export const preloadLibrary = (url: string) => {
  const link = document.createElement('link');
  link.rel = 'modulepreload';
  link.href = url;
  document.head.append(link);
};
