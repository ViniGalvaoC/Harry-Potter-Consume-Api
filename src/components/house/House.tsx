import { useEffect, useState } from "react";
import { House } from "../../Contants";
import { fetchHouses } from "../../service/ApiService";
import './House.css'

const HouseComponent: React.FC = () =>{
    const [data, setData] = useState<House[]>([]);
      const [loading, setLoading] = useState<boolean>(true);
    
      useEffect(() => {
        const getCharacters = async () => {
          try {
            const houses = await fetchHouses();
            setData(houses);
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
        <div className="house-list">
          {data.map((house, index) => (
            <div key={index} className="house-item">
                <a href="/house/characters">
                    <img src={`/${formatStringHouse(house.house)}.webp`} alt={house.house} className="house-image" />
                    <h3>{house.house}</h3>
                    <h3>{house.founder}</h3>
                </a>
            </div>
          ))}
        </div>
      );
}

const formatStringHouse = (word:string) =>{
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default HouseComponent;