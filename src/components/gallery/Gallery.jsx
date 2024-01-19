import React from 'react'
import '../gallery/Gallery.css'
import { Container } from '../../utils/Utils'
import still1 from '../../images/still1.jpg'
import still2 from '../../images/still2.jpg'
import still3 from '../../images/still3.jpg'
import still4 from '../../images/still4.jpg'
import still5 from '../../images/still5.jpg'
import still6 from '../../images/still6.jpg'
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';


const Gallery = () => {

  const {t} = useTranslation()
  const dispatch = useDispatch();
  function changeLang(selectedLangCode){
      i18n.changeLanguage(selectedLangCode);
      setLanguageState(selectedLangCode);
      dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})}


  return (
    <>
    <Container>
        <section className='gallery'>
            <h1 className='gallery__title'>{t("gallery.title")} <span>{t("gallery2.title")}</span></h1>
            <div className="gallery__item">
            <img src={still1} alt="" />
            <img src={still2} alt="" />
            <img src={still3} alt="" />
            <img src={still4} alt="" />
            <img src={still5} alt="" />
            <img src={still6} alt="" />
            
            </div>
        </section>
    </Container>
    </>
  )
}

export default Gallery