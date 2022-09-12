import React from 'react'
import { withTranslation } from 'react-i18next';
import { changeLanguage } from '../api/apiCalls';

function LanguageSelector(props) {

    const onChangeLanguage = (language) => {
        const { i18n } = props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }

    return (
        <div className='container'>
            <img onClick={() => onChangeLanguage("tr")} style={{ width: "40px", height: "30px", cursor: "pointer", margin: "5px" }} src="https://countryflagsapi.com/png/tr" alt="tr"></img>
            <img onClick={() => onChangeLanguage("en")} style={{ width: "40px", height: "30px", cursor: "pointer", margin: "5px" }} src="https://countryflagsapi.com/png/us" alt="us"></img>
        </div>
    )
}

export default withTranslation()(LanguageSelector);
