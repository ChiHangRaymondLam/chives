import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import './header.scss'
import Logo from '../../../assets/images/masseyUniversityLogo.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const HeaderView = props => {

    const {isMobileMenuShow, handleMobileMenuShow, getHeaderItems, setLocales, lang} = props;

    return (
        <div className="chi-header">
            <nav className="navbar navbar-expand-lg">
                <div className="navbar-logo-wrapper">
                    <NavLink className="nav-link" to={"/"} activeClassName="active" exact>
                        <img className={"logo"} src={Logo} alt={"logo"}/>
                    </NavLink>
                </div>

                <div className="navbar-nav-wrapper">
                    <button className={isMobileMenuShow ? "menu-icon-mobile active" : "menu-icon-mobile"}
                            onClick={() => {
                                handleMobileMenuShow();
                            }}><FontAwesomeIcon icon={faBars} title={"Logout"}/>
                    </button>
                    <ul className={isMobileMenuShow ? "navbar-nav show" : "navbar-nav not-show"}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"} activeClassName="active" exact>
                                {getHeaderItems("nav.home")}
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/trade"} activeClassName="active" exact>
                                {getHeaderItems("nav.trade")}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>My WatchList</li>
                                <li>My Current Questions</li>
                                <li>My Answered Questions</li>
                                <li>My Current Offers</li>
                                <li>My Completed Offers</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/manage-stock"} activeClassName="active" exact>
                                {getHeaderItems("nav.manage-stock")}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>Stock Lists</li>
                                <li>Options</li>
                                <li>Virtual Stock</li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/help"} activeClassName="active" exact>
                                {getHeaderItems("nav.help")}
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li>About Us</li>
                                <li>How It Works</li>
                                <li>Teams and Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Contact Us</li>
                            </ul>
                        </li>
                        {
                            isMobileMenuShow ?
                                (<Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/account"} activeClassName="active"
                                                     exact>
                                                {getHeaderItems("nav.account")}
                                            </NavLink>
                                        </li>
                                        <div className="nav-lang-mobile">
                                            <button className={lang === "en" ? "active" : null}
                                                    onClick={() => {
                                                        setLocales("en");
                                                        handleMobileMenuShow()
                                                    }}>English
                                            </button>
                                            <span>&nbsp;/&nbsp;</span>
                                            <button className={lang === "ja" ? "active" : null}
                                                    onClick={() => {
                                                        setLocales("ja");
                                                        handleMobileMenuShow()
                                                    }}>Jp
                                            </button>
                                        </div>
                                    </Fragment>
                                ) : null
                        }

                    </ul>
                </div>
                <div className="navbar-setting-wrapper">
                    <div className="navbar-setting-section">
                        <div className="nav-lang">
                            <button className={lang === "en" ? "active" : null} onClick={() => {
                                setLocales("en")
                            }}>English
                            </button>
                            <span>&nbsp;/&nbsp;</span>
                            <button className={lang === "ja" ? "active" : null} onClick={() => {
                                setLocales("ja")
                            }}>日本語
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default HeaderView;
