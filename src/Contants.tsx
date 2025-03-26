export interface Character {
    fullName: string;
    nickname: string;
    hogwartsHouse: string;
    image: string;
    index: number;
}

export interface Spell {
  spell: string;
  use: string;
  index: number;
}

export interface Book {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  cover: string;
  index: number;

}

export interface House{
  house: string;
  founder: string;
  index: number;
}