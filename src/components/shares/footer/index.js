import React from 'react';
import FootLogo from "../../../assets/images/masseyUniversityLogo.png";
import "./footer.scss"


const Footer = () => {

    return (
        <div className={"apl-footer"}>
            <div className={"logo-wrapper"}>
                <img className={"logo"} src={FootLogo} alt={"logo"}/>
            </div>
            <div className={"section-wrapper"}>
                <div className={"section"}>
                    <p>Copyright &copy; 2019 Massey University</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
