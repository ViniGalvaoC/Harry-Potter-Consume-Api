import React, { useEffect, useState } from 'react';
import { Spell } from '../../Contants';
import { fetchSpells } from '../../service/ApiService';
import './Spell.css'
const SpellApiComponent: React.FC = () => {
  const [data, setData] = useState<Spell[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getSpells = async () => {
      try {
        const spells = await fetchSpells();
        setData(spells);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getSpells();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="spell-list">
      {data.map((spell, index) => (
        <div key={index} className="spell-item">
          <h3 className="spell-name">{spell.spell}</h3>
          <p className="spell-description">{spell.use}</p>
        </div>
      ))}
    </div>
  );
};

export default SpellApiComponent;