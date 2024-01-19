import React from 'react'
import '../services/Services.css'
import { Container, Button } from '../../utils/Utils'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';

const Services = () => {

  const {t} = useTranslation()
  const dispatch = useDispatch();
  function changeLang(selectedLangCode){
      i18n.changeLanguage(selectedLangCode);
      setLanguageState(selectedLangCode);
      dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})}

  return (
    <>
      <section className="services">
        <Container>

          <h1 className="services__title">{t("servises.title")} <span>{t("servises2.title")}</span> </h1>
          <div className="services__item">
            <div className="services__item-box__active">
              <div className="icon__box">
                <img src={icon1} alt="" />
              </div>
              <h3>{t("card1.card1")}</h3>
              <p>{t("card_1.title")}</p>
            </div>
            <div className="services__item-box">
              <div className="icon__box">
                <img src={icon2} alt="" />
              </div>
              <h3>{t("card2.card2")}</h3>
              <p>{t("card_2.title")}</p>
            </div>
            <div className="services__item-box">
              <div className="icon__box">
                <img src={icon3} alt="" />
              </div>
              <h3>{t("card3.card3")}</h3>
              <p>{t("card_3.title")}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services