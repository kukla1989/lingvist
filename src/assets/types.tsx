export interface Word {
  word: string;
  translation: string;
  countRepeat: number;
  sentence?: string;
  word_place?: number;
  ukr_sentence?: string;
  definition: string;
  lastDate: Date;
  wordId?: string;
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


