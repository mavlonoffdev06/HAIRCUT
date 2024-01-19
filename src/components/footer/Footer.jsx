import React from 'react'
import '../footer/Footer.css'
import { Container } from '../../utils/Utils'
import logo from '../../images/logo.png'
import { FaFacebook, FaTelegram, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import {  AiFillTwitterCircle } from 'react-icons/ai';
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';

const Footer = () => {
    // ------ i18next START ------
    const {t} = useTranslation()
    const dispatch = useDispatch();
    function changeLang(selectedLangCode){
        i18n.changeLanguage(selectedLangCode);
        setLanguageState(selectedLangCode);
        dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})}
    // ------ i18next END ------

  return (
    <>
    <Container>
        <footer className='footer'>
        <a href="#" className="footer__logo"><img src={logo} alt="" />arber</a>
        <p className='footer__title'>{t("contact.title")}</p>
        
        <ul className="footer__icon">
            <li>
                <a href="#"><FaFacebook /></a>
            </li>
            <li>
                <a href="#"><AiFillTwitterCircle /></a>
            </li>
            <li>
                <a href="#"><FaTelegram /></a>
            </li>
            <li>
                <a href="#"><FaInstagram /></a>
            </li>
            <li>
                <a href="#"><FaPhoneAlt /></a>
            </li>
        </ul>
        <div className='footer__line'></div>
        </footer>
    </Container>
    </>
  )
}

export default Footer