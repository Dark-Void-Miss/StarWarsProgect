import s from "./Cards.module.css";
import { CharactersAPI } from "../../../services/CharactersAPI";
import { FiltrCard } from "../FiltrCard";

export const Cards = ({ eyeColor }) => {
  const { data, loading, error } = CharactersAPI(
    "https://swapi.py4e.com/api/people/"
  ); 



console.log(eyeColor);



  if (loading) {
    return <div className={s.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={s.error}>Error: {error}</div>;
  }

  if (!data || !data.results || data.results.length === 0) {
    return <div className={s.error}>No data available</div>;
  }

console.log(data.results[0].eye_color);


  return (<>
    {}
      {data.results.map((character) => (
        <div key={character.url} className={s.box}>
          <div className={s.card}>
            <h2 className={s.name}>{character.name}</h2>
            <div className={s.caratres}>
              <div>
                <span className={s.text}>{character.height}</span>{" "}
                <p className={s.title}>height</p>
              </div>
              <div>
                <span className={s.text}>{character.mass}</span>{" "}
                <p className={s.title}>mass</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    
  </>);
};
