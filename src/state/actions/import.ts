import { Context } from '..';
import { g } from '../global';

type InstallOptions = {
  name: string;
  version?: string;
  isDependency?: boolean;
};

/**
 * install npm package and types
 * @param payload package name, (version)
 * @returns Promise<void>
 */
export const install = async (
  { state, effects, actions }: Context,
  { name, version = '*', isDependency }: InstallOptions
) => {
  // check if already exists
  if (state.imports[name]) return;

  // load package.json from unpkg
  var pkg = await effects.loadPackageJson(name, version);
  if (!pkg) throw new Error(`package ${name}@${version} not found`);

  // build unpkg url
  let url: string | undefined;
  if (pkg.module || pkg.main) {
    url = `https://unpkg.com/${pkg.name}@${pkg.version}/${
      pkg.module || pkg.main
    }`;
  }

  if (!isDependency) {
    // add to local storage
    effects.local.addImport(name, version);
    // preload import
    if (url) {
      effects.preloadLibrary(url);
    }
  }

  state.imports = {
    ...state.imports,
    [pkg.name]: {
      url,
      isDependency,
      name: pkg.name,
      version: pkg.version,

      dependencies: pkg.dependencies
        ? Object.keys(pkg.dependencies)
        : undefined,
    },
  };

  // check if types exists in package
  if (pkg.types || pkg.typings) {
    // load types
    var types = await effects.loadTypesLibrary(pkg);
    if (types) {
      state.libraries.push(types);
      // apply types to editor
      for (const file of types.files) {
        g.monaco?.languages.typescript.typescriptDefaults.addExtraLib(
          file.content,
          file.fileName
        );
      }
    }
  } else {
    // else get specific types package: @types/[name]
    await actions.install({
      name: effects.getTypesPackageName(pkg.name),
      isDependency: true,
    });
  }

  // load dependency types
  if (pkg.dependencies) {
    for (const [key, value] of Object.entries(pkg.dependencies)) {
      await actions.install({ name: key, version: value, isDependency: true });
    }
  }
};

/**
 * unload package and types
 * @param payload package name
 * @returns Promise<void>
 */
export const unload = async ({ effects, actions }: Context, name: string) => {
  actions._save();

  effects.local.removeImport(name);

  location.reload();
};
