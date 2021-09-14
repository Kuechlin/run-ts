import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from 'overmind-react';
import { state } from './state';
import * as actions from './actions';
import * as effects from './effects';
import { IContext } from 'overmind';

export const config = {
  state,
  actions,
  effects,
};

export type Context = IContext<typeof config>;

export const useAppState = createStateHook<Context>();
export const useActions = createActionsHook<Context>();
export const useEffects = createEffectsHook<Context>();
export const useReaction = createReactionHook<Context>();
