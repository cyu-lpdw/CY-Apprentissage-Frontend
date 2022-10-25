import './SignUpPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import SignUp from '../../components/SignUp/SignUp';
import Footer from '../../components/Footer/Footer';

function ProfilePage () {
    return (
        <div className="sign-up-page">
            <Navigation />
            <SignUp />
            <Footer />
        </div>
    );
}

export default ProfilePage;