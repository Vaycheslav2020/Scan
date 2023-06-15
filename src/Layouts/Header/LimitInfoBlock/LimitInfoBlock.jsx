import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//
import setInfoAccount from "../../../service/accountInfo";
//
import style from "./LimitInfoBlock.module.scss";
//
import Loader from "../../../shared/Loader/Loader";

const LimitInfoBlock = () => {
  const { isAuth } = useSelector((state) => state.isAuth);
  const { accountData } = useSelector((state) => state.accountData);
  const [dataPrevious, setDataPrevious] = useState(true);

  useEffect(() => {
    if (accountData) {
      setDataPrevious((dataPrevious) => (dataPrevious = false));
    } else {
      setDataPrevious((dataPrevious) => (dataPrevious = true));
    }
  }, [accountData]);

  useEffect(() => {
    if (isAuth === true) {
      setInfoAccount();
    }
  }, [isAuth]);

  return (
    <div className={style.box}>
      {dataPrevious ? <Loader /> : null}
      <div className={style.textWrapper}>
        <p className={style.text}>Использовано компаний</p>
        <span className={style.used}>{accountData?.usedCompanyCount}</span>
      </div>
      <div className={style.textWrapper}>
        <p className={style.text}>Лимит по компаниям</p>
        <span className={style.limit}>{accountData?.companyLimit}</span>
      </div>
    </div>
  );
};
export default LimitInfoBlock;
