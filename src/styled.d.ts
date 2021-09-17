import 'styled-components';
import { Theme } from './utils/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
