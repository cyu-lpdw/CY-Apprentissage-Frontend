import './SignUp.scss';

function SignUp () {
    return (
        <div className="sign-up-body">
            <p className="sign-up-title">Inscription</p>
            <form className="sign-up-form">
                <div className="sign-up-lastname">
                    <label>Nom :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-up-firstname">
                    <label>Prénom :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-up-mail">
                    <label>Email :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-up-password">
                    <label>Mot De Passe :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-up-button">
                    <button className="sign-up-button">
                        S'inscrire
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;