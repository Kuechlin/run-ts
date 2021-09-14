import * as monaco from 'monaco-editor';
import { g } from '../global';

export const worker = {
  _uri: null as monaco.Uri | null,
  _proxy: null as monaco.languages.typescript.TypeScriptWorker | null,

  async getEmitOutput() {
    if (!this._uri) {
      if (!g.editor) throw new Error('no ref to monaco editor');
      // save raw code to local storage
      const model = g.editor.getModel();
      if (!model) throw new Error('no model to save');
      this._uri = model.uri;
    }

    if (!this._proxy) {
      if (!g.monaco) throw new Error('no ref to monaco editor');
      // get emit output from typescript worker
      const worker = await g.monaco.languages.typescript.getTypeScriptWorker();
      this._proxy = await worker(this._uri);
    }

    return this._proxy.getEmitOutput(this._uri.toString());
  },
};
