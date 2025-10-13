export interface Word {
  word: string;
  translation: string;
  repetitions: number;
  lastDate: Date;
}

export interface WordType {
  word: string;
  pronunciation: string;
  translations: [string, string[][]][];
  wordTranslation: string;
}
