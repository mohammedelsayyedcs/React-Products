import './Header.css'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// Redux - Locale
import { changeLang } from '../../ReduxTK/appSettingsSlice'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

export default function Header() {
    // Redux - Locale
    const lang = useSelector(state => state.appSettings.lang);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const toggleLangHandler = () => {
        dispatch(changeLang());
        // i18n.on(languageChanged, (lang)=>{})
        i18n.changeLanguage(lang);
    }

    return (
        <div>
            <nav className="header navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger fw-bold px-5" href="#">{t("products-project")}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link px-3" to={"/"} aria-current="page">{t("home")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-3" to={"/products"}>{t("products")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-3" to={"/add-product"}>{t("add_product")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-3" to={"/contact-us"}>{t("contact")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-3" to={"/about-us"}>{t("about")}</NavLink>
                            </li>
                        </ul>
                    </div>
                    <button
                        className="btn btn-outline-danger border-0 ms-5 me-5 fw-bolder"
                        onClick={toggleLangHandler}>
                        {lang}
                    </button>
                </div>
            </nav>
        </div>
    )
}
