import './SignIn.scss';

function SignIn () {
    return (
        <div className="sign-in-body">
            <p className="sign-in-title">Connexion</p>
            <form className="sign-in-form">
                <div className="sign-in-mail">
                    <label>Email :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-in-password">
                    <label>Mot De Passe :</label>
                    <input type="text" required/>
                </div>
                <div className="sign-in-button">
                    <button className="sign-in-button">
                        Se Connecter
                    </button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;