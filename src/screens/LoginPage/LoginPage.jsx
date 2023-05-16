import style from "./LoginPage.module.scss";
//
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import SectionTitle from "./sections/SectionTitle/SectionTitle";
import SectionForm from "./sections/SectionForm/SectionForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.isAuth);
  if (isAuth !== false) {
    return navigate("/");
  }
  return (
    <main className="container">
      <div className={style.wrapper}>
        <SectionTitle />
        <SectionForm />
      </div>
    </main>
  );
};
export default LoginPage;
