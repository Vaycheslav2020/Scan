import { useState, useEffect } from "react";
import style from "./LoginPage.module.scss";
// components
import SectionTitle from "./sections/SectionTitle/SectionTitle";
import SectionForm from "./sections/SectionForm/SectionForm";
// 
import Characters from "./images/Characters.png";

const LoginPage = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
  return (
    <main className="container">
      <div className={style.wrapper}>
        <SectionTitle />
        <SectionForm />
        {!matches && (
          <img
            className={style.image}
            src={Characters}
            alt="image characters"
          />
        )}
      </div>
    </main>
  );
};
export default LoginPage;
