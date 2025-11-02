export interface Word {
  word: string;
  translation: string;
  repetitions: number;
  lastDate: Date;
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
  translations: {
    [partOfSpeech: string]: TranslationEntry[][];
  };
}


