export const HEBREW_LETTERS = [
  'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז',
  'ח', 'ט', 'י', 'ך', 'כ', 'ל', 'ם',
  'מ', 'ן', 'נ', 'ס', 'ע', 'ף', 'פ',
  'ץ', 'צ', 'ק', 'ר', 'ש', 'ת',
];

export const WINDOWS_GERESH = "'";
export const MAC_GERESH = '׳';

const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
export const GERESH = isMac ? MAC_GERESH : WINDOWS_GERESH;