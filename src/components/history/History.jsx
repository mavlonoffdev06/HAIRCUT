import React from 'react'
import '../history/History.css'
import { Container, Button } from '../../utils/Utils'
import leftimg from '../../images/left.png'
import rightimg from '../../images/right.png'
import historyimg from '../../images/history__img.png'
import { useTranslation } from "react-i18next";
import i18n from "../../language/i18next";
import { useDispatch } from 'react-redux';

const History = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    function changeLang(selectedLangCode){
        i18n.changeLanguage(selectedLangCode);
        setLanguageState(selectedLangCode);
        dispatch({language_code: selectedLangCode, type: "CHANGE_LANGUAGE"})}

    return (
        <><Container>
            <section className='history'>
                
                    <main className="history__section">
                        <div className="history__section-left">
                            <img src={historyimg} alt="" />
                        </div>
                        <div className="history__section-right">
                            <h2 className="history__section-right__title">{t("history.title")} <span>{t("history_2.title")}</span></h2>
                            <p className="history__section-right__subtitle">{t("history2.title")}</p><br /><br /><br /><br /><br />
                                <button className="button">{t("hsbutton.title")}</button>
                        </div>
                    </main>
                
            </section></Container>
        </>
    )
}

export default History