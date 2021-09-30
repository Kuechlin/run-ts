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
    'editorLineNumber.activeForeground': colors.cursor,
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
  var { r, g, b } = parseColor(color);

  r = Math.round((r * (100 + percent)) / 100);
  g = Math.round((g * (100 + percent)) / 100);
  b = Math.round((b * (100 + percent)) / 100);

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  return stringifyColor(r, g, b);
}

export function isColor(color: string) {
  return /^#[0-9a-f]{3,6}$/i.test(color);
}

export function invertColor(color: string) {
  var { r, g, b } = parseColor(color);
  // invert color components
  r = 255 - r;
  g = 255 - g;
  b = 255 - b;
  // pad each with zeros and return
  return stringifyColor(r, g, b);
}

function parseColor(color: string): { r: number; g: number; b: number } {
  if (!color || typeof color !== 'string') return { r: 0, g: 0, b: 0 };
  // remove hash
  if (color.indexOf('#') === 0) {
    color = color.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  if (color.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  return {
    r: parseInt(color.substring(0, 2), 16),
    g: parseInt(color.substring(2, 4), 16),
    b: parseInt(color.substring(4, 6), 16),
  };
}

function padZero(str: string, len = 2) {
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function stringifyColor(r: number, g: number, b: number) {
  var RR = padZero(r.toString(16));
  var GG = padZero(g.toString(16));
  var BB = padZero(b.toString(16));

  return '#' + RR + GG + BB;
}
