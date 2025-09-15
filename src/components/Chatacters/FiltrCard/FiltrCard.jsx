import { useState } from "react";
import s from "./FiltrCard.module.css";
import "./customSelect.css";
import Select from "react-select";
const options = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "brown",
    label: "brown",
  },
  {
    value: "red",
    label: "red",
  },
  {
    value: "blue",
    label: "blue",
  },
  {
    value: "white",
    label: "white",
  },
];

export const FiltrCard = ({ onChangeFilter }) => {
  const [currentsColor, setCurrentsColor] = useState("All");

  const getValue = () => {
    return currentsColor
      ? options.find((c) => c.value === currentsColor)
      : null;
  };

  const onChange = (newValue) => {
    setCurrentsColor(newValue.value);
    onChangeFilter(newValue.value)
  };

  return (
    <>
    
      <div className={s.box}>
        <div className={s.text}>color eye </div>
        <div>
          <Select
            className="react-select"
            classNamePrefix="react-select"
            onChange={onChange}
            value={getValue()}
            options={options}
          />
        </div>
      </div>
    </>
  );
};
