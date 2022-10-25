import './SignInPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import SignIn from '../../components/SignIn/SignIn';
import Footer from '../../components/Footer/Footer';

function ProfilePage () {
    return (
        <div className="sign-in-page">
            <Navigation />
            <SignIn />
            <Footer />
        </div>
    );
}

export default ProfilePage;