export interface Word {
  word: string;
  translation: string;
  countRepeat: 0 | 1 | 2 | 3 | 4 | 5;
  sentence?: string;
  word_place?: number;
  ukr_sentence?: string;
  definition: string;
  lastDate: Date;
  wordId: number;
}

export interface TranslationEntry {
  definition: string;
  example?: string | null;
  ukrDefinition?: string;
  ukrExample?: string;
}

export interface WordType {
  word: string;
  pronunciation: string;
  audio: string;
  wordTranslation: string;
  notFound: boolean;
  misspelled: boolean;
  similarWords?: string[];
  translations: {
    [partOfSpeech: string]: TranslationEntry[][];
  };
}


