import { useState } from "react";
import s from "./Characters.module.css";
import { Cards } from "./FiltrCard/Cards/Cards";
import { FiltrCard } from "./FiltrCard/FiltrCard";

export const Characters = () => {
    
  const [eyeColor, setEyeColor] = useState("All");


  return (
    <div className={s.CharactersBox}>
      <div className={s.container}>
        <span className={s.language}>Language: en</span>
        <h1 className={s.title}>60 Peoples for you to choose you favorite</h1>
        <div>
          <FiltrCard  onChangeFilter={setEyeColor}/>
        </div>
        <div  className={s.boxCards}>
          <Cards eyeColor={eyeColor}/>
        </div>
      </div>
    </div>
  );
};
