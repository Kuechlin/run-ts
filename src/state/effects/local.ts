import { defaultTheme, Theme } from '../../utils/theme';

/**
 * local storage
 */
export const local = {
  defaultValue: "import React from 'react';",
  defaultImports: { '@types/react': '17.0.19' },
  // save code to local storage
  save(code: string) {
    localStorage.setItem('code', code);
  },
  // load code from local
  load(): string {
    const value = localStorage.getItem('code');
    if (value) return value;
    else return this.defaultValue;
  },
  // get settings
  getTheme(): Theme {
    const value = localStorage.getItem('theme');
    try {
      if (value) return JSON.parse(value);
      else return defaultTheme;
    } catch (error) {
      return defaultTheme;
    }
  },
  // save settings to local storage
  setTheme(theme: Theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  },
  // add import to local storage
  addImport(name: string, version: string) {
    var imports = this.getImports();
    imports[name] = version;
    localStorage.setItem('imports', JSON.stringify(imports));
  },
  // remove import from local storage
  removeImport(name: string) {
    var imports = this.getImports();
    delete imports[name];
    localStorage.setItem('imports', JSON.stringify(imports));
  },
  // get all imports from local storage
  getImports(): Record<string, string> {
    try {
      const value = localStorage.getItem('imports');
      if (value) {
        return JSON.parse(value);
      } else {
        return this.defaultImports;
      }
    } catch (err) {
      return this.defaultImports;
    }
  },
};
