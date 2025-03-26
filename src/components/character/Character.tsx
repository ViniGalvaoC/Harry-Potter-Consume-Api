import React, { useEffect, useState } from 'react';
import './Character.css';
import { Character } from '../../Contants';
import { fetchCharacters } from '../../service/ApiService';

const CharacterApiComponent: React.FC = () => {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const characters = await fetchCharacters();
        setData(characters);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getCharacters();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="character-list">
      {data.map((character, index) => (
        <div key={index} className="character-item">
          <img src={character.image} alt={character.fullName} className="character-image" />
          <h3>{character.fullName}</h3>
          <h3>{character.hogwartsHouse}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterApiComponent;