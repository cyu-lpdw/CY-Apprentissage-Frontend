import './ProfilePage.scss';

import Navigation from '../../components/Navigation/Navigation';
import ProfileBody from '../../components/ProfileBody/ProfileBody';
import Footer from '../../components/Footer/Footer';

function ProfilePage () {
    return (
        <div className="profile-page">
            <Navigation />
            <ProfileBody />
            <Footer />
        </div>
    );
}

export default ProfilePage;