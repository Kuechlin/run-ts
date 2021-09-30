import { Context } from '..';
import { getAppSize } from '../../utils/appsize';
import { createEditorTheme, defaultTheme, Theme } from '../../utils/theme';
import { g } from '../global';

export * from './import';
export * from './editor';

export const onInitializeOvermind = async ({
  state,
  effects,
  actions,
}: Context) => {
  state.theme = effects.local.getTheme();

  window.addEventListener('resize', actions.resize);
};

/**
 * update theme colors and reload
 * @param theme theme colors
 */
export const updateTheme = ({ state, effects }: Context, theme: Theme) => {
  state.theme = theme;
  effects.local.setTheme(theme);
  g.monaco?.editor.defineTheme('default-dark', createEditorTheme(state.theme));
};

export const resetTheme = ({ state, effects }: Context) => {
  state.theme = defaultTheme;
  effects.local.setTheme(defaultTheme);
  g.monaco?.editor.defineTheme('default-dark', createEditorTheme(state.theme));
};

/**
 * set active application part
 */
export const setActive = ({ state }: Context, key: 'editor' | 'output') => {
  state.active = key;
};

/**
 * handle windows resize
 */
export const resize = ({ state }: Context) => {
  const next = getAppSize();
  if (next !== state.size) {
    state.size = next;
    if (next === 's') {
      state.active = 'editor';
    }
  }
};
