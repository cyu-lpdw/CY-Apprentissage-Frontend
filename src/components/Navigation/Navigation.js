import './Navigation.scss';

import { NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <div className="navigation">
            <div className="navigation-brand">
                <NavLink to="/" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">CY Apprentissage</div>
                    </div>
                </NavLink>
            </div>
            <div className="navigation-log">
                <NavLink to="/connexion" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">Se connecter</div>
                    </div>
                </NavLink>
                <NavLink to="/inscription" underline="none">
                    <div className="link-box">
                        <div className="link-icon"></div>
                        <div className="link-name">S'inscrire</div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;