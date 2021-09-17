export type Package = {
  name: string;
  version: string;
  url?: string;
  dependencies?: string[];
  isDependency?: boolean;
};

export type TypesLibrary = {
  package: string;
  version: string;
  files: TypesFile[];
};

export type TypesFile = {
  fileName: string;
  content: string;
};

export type AppSettings = {
  themes: Record<string, any>;
  theme: string;
};

export type AppState = {
  current: 'initial' | 'mounting' | 'mounted';
  running?: boolean;
  imports: Record<string, Package>;
  libraries: TypesLibrary[];
};

export const state: AppState = {
  current: 'initial',
  imports: {},
  libraries: [],
};
