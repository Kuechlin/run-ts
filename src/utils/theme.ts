import { IThemeData } from '../state/global';

const colors = {
  black: '#282c34',
  white: '#DCDFE4',
  blue: '#61AFEF',
  cyan: '#56B6C2',
  purple: '#C678DD',
  red: '#cd3131',
  lightRed: '#E06C75',
  green: '#98C379',
  yellow: '#E5C07B',
};

export const defaultTheme: Theme = {
  base: 'dark',
  name: 'default-dark',
  font: {
    name: "Consolas, 'Courier New', monospace",
    feature: "'liga' 0, 'calt' 0",
  },
  colors: {
    background: colors.black,
    foreground: colors.white,
    link: colors.blue,
    lineNumber: shadeColor(colors.black, 60),
    lineNumberActive: colors.blue,
    border: shadeColor(colors.black, 60),
    cursor: colors.blue,
    error: colors.red,
    type: colors.yellow,
    keyword: colors.purple,
    delimiter: colors.white,
    comment: shadeColor(colors.black, 100),
    identifier: colors.white,
    number: colors.cyan,
    string: colors.green,
    regexp: colors.lightRed,
  },
};

export type Theme = {
  name: string;
  base: 'dark' | 'light';
  font: {
    name: string;
    feature?: string;
  };
  colors: {
    background: string;
    foreground: string;
    link: string;
    lineNumber: string;
    lineNumberActive: string;
    border: string;
    cursor: string;
    error: string;
    type: string;
    keyword: string;
    delimiter: string;
    comment: string;
    identifier: string;
    number: string;
    string: string;
    regexp: string;
  };
};

export const createEditorTheme = ({ colors }: Theme): IThemeData => ({
  base: 'vs-dark',
  inherit: true,
  colors: {
    'editor.background': colors.background,
    'editor.foreground': colors.foreground,
    'textLink.foreground': colors.link,
    'editor.selectionBackground': shadeColor(colors.background, 40),
    'editor.lineHighlightBackground': shadeColor(colors.background, 15),
    'editorCursor.foreground': colors.cursor,
    'editorWhitespace.foreground': shadeColor(colors.foreground, -60),
    'editorLineNumber.foreground': colors.lineNumber,
    'editorLineNumber.activeForeground': colors.lineNumberActive,
    'editorError.foreground': colors.error,
    'editorSuggestWidget.background': shadeColor(colors.background, -10),
    'editorSuggestWidget.border': colors.border,
    'editorSuggestWidget.selectedBackground': shadeColor(colors.link, -40),
    'editorGroup.background': colors.error,
    'editorHoverWidget.background': shadeColor(colors.background, -10),
    'editorHoverWidget.border': colors.border,
  },
  rules: [
    { token: '', foreground: colors.foreground, background: colors.background },
    {
      token: TokenType.Comment,
      foreground: colors.comment,
      fontStyle: 'italic',
    },
    ...[
      TokenType.StringLiteral,
      TokenType.NumberLiteral,
      TokenType.RegExpLiteral,
      TokenType.Type,
      TokenType.Keyword,
      TokenType.Identifier,
      TokenType.Delimiter,
    ].map((token) => ({
      token,
      foreground: colors[token],
    })),
  ],
});

export function shadeColor(color: string, percent: number) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = Math.round((R * (100 + percent)) / 100);
  G = Math.round((G * (100 + percent)) / 100);
  B = Math.round((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

enum TokenType {
  Type = 'type',
  Keyword = 'keyword',
  Delimiter = 'delimiter',
  Comment = 'comment',
  Identifier = 'identifier',
  NumberLiteral = 'number',
  StringLiteral = 'string',
  RegExpLiteral = 'regexp',
}
