import React from 'react'
import '../banner/Banner.css'
import { Container } from '../../utils/Utils'
import bannerimg from '../../images/banner__img.png'
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';

const Banner = () => {
    // ------ i18next start ------

  const {t} = useTranslation()
    const dispatch = useDispatch();
    function changeLang(selectedLangCode){
        i18n.changeLanguage(selectedLangCode);
        setLanguageState(selectedLangCode);
        dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})
    }

    // ------ i18next end ------

  return (
    <>
      <Container>
        <section className='banner__section'>
          {/* ------ BANNER -ITEM START ------ */}
          <div className="banner__section-left">
            <h1 className='banner__section-left__title'>{t("banner.title")}</h1>
            <p className="banner__section-left__subtitle">{t("main.subtitle")}</p><br /><br /><br />
              <button className="button">{t("button2.button")}</button>
          </div>
          {/* ------ BANNER -ITEM END ------ */}
          {/* ------ BANNER IMAGE START ------ */}
          <div className="banner__section-right">
              <img src={bannerimg} alt="" />
          </div>
          {/* ------ BANNER IMAGE END ------ */}
        </section>
      </Container>
    </>
  )
}

export default Banner