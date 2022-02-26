export interface ICharacter {
  info: ICharacterInfo;
  results: Array<ICharacterResult>;
}

export interface ICharacterInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacterResult {
  //Todo API deki gibi tanımlamaları ve tipleri yaz
  id: number;
  name: string;
  status: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}
