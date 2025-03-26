import axios from 'axios';
import { Character, Spell , House, Book } from '../Contants';

const API_URL = 'https://potterapi-fedeperin.vercel.app/pt/';

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<Character[]>(API_URL.concat("characters"));
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};

export const fetchSpells = async (): Promise<Spell[]> => {
    try {
      const response = await axios.get<Spell[]>(API_URL.concat("spells"));
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
};

export const fetchHouses = async (): Promise<House[]> => {
    try {
      const response = await axios.get<House[]>(API_URL.concat("houses"));
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
};

export const fetchBooks = async (): Promise<Book[]> => {
    try {
      const response = await axios.get<Book[]>(API_URL.concat("books"));
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error;
    }
};