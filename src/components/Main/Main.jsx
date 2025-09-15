import { Link } from "react-router-dom";
import s from "./Main.module.css";
export const Main = () => {
  return (
    <>
      <div className={s.box}>
        <div className={s.container}>
          <div>
            <h1 className={s.taitl}>Find all your favorite character</h1>
            <div className={s.title}>
              <p>
                You can find out all the information about favorite characters
              </p>
            </div>
            <div>
              <Link to="/Characters">
                <button className={s.button}>See more...</button>
              </Link>
            </div>
          </div>
          <div className={s.img}>
            <img src="/public/rect.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
