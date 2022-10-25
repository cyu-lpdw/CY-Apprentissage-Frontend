import './Footer.scss';

import { NavLink } from 'react-router-dom';

function Footer () {
    return (
        <div className="footer">
            <div className="footer-brand">
                <NavLink to="/" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">CY Apprentissage</div>
                    </div>
                </NavLink>
            </div>
            <div className="footer-links">
                <NavLink to="/a-propos" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">A Propos</div>
                    </div>
                </NavLink>
                <NavLink to="/conditions-generales" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">Conditions Générales</div>
                    </div>
                </NavLink>
                <NavLink to="/mentions-legales" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">Mentions Légales</div>
                    </div>
                </NavLink>
                <NavLink to="/contact" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">Contact</div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Footer;