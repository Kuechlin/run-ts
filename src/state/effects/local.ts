/**
 * local storage
 */
export const local = {
  defaultValue: '// ts typer',
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
