import {useState} from 'react'
import '../nav/Nav.css'
import { Container } from '../../utils/Utils'
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';
import logo from '../../images/logo.png'
import uzb from '../../images/uzb.png'
import en from '../../images/enn.png'


const Nav = () => {
    // ------ i18next start ------
  const {t} = useTranslation()
    const dispatch = useDispatch();
    const [languageState, setLanguageState] = useState(localStorage.getItem("lang") || "en");
    function changeLang(selectedLangCode){
        i18n.changeLanguage(selectedLangCode);
        setLanguageState(selectedLangCode);
        dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})
    }
    // ------ i18next end ------
   
    return (
        <>
            <header className='header'>
                <Container>
                    <nav className="header__navigation">
                        {/* ------ LOGO START ------ */}
                        <a href="#" className="header__navigation-logo"><img src={logo} alt="" />arber</a>
                        {/* ------ LOGO END ------ */}

                        {/* ------ LINKS START ------ */}
                        <ul className='header__navigation-item'>
                            <li className='header__navigation-item__link'>
                                <a href="#">{t("nav.home")}</a>
                            </li>
                            <li className='header__navigation-item__link'>
                                <a href="#">{t("nav.history")}</a>
                            </li>
                            <li className='header__navigation-item__link'>
                                <a href="#">{t("nav.services")}</a>
                            </li>
                            <li className='header__navigation-item__link'>
                                <a href="#">{t("nav.gallery")}</a>
                            </li>
                        </ul>
                        {/* ------ LINKS END ------ */}

                        {/* ------ LANGUAGE START ------ */}
                        <div className="header__navigation-right">
                        <div className="lang">
                            <img style={languageState === "uz" ? {borderBottom: "1px solid dodgerblue"} : null}  src={uzb} alt="" className='lang_uz_img' onClick={() => changeLang("uz")}/>
                            <img  style={languageState === "en" ? {borderBottom: "1px solid dodgerblue"} : null} src={en} alt="" className='lang_ru_img' onClick={() => changeLang("en")}/>
                        </div>
                            <button className='button'>{t("button.button")}</button>
                        </div>
                        {/* ------ LANGUAGE END ------ */}
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Nav