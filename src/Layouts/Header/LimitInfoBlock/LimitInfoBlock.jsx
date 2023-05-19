import { useEffect } from "react";
import { useSelector } from "react-redux";
// 
import setInfoAccount from "../../../service/accountInfo";
// 
import style from "./LimitInfoBlock.module.scss";
//
import Loader from "../../../shared/Loader/Loader";

const LimitInfoBlock = () => {
  useEffect(() => {
    setInfoAccount()
  }, [setInfoAccount])
  const { accountData } = useSelector(state => state.accountData);

  return (
    <div className={style.box}>
    {accountData === {} ? <Loader /> : null}
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
