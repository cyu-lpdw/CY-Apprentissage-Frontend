import './ProfilPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import ProfilBody from '../../components/ProfilBody/ProfilBody';
import Footer from '../../components/Footer/Footer';

function HomePage () {
    return (
        <div className="home-page">
            <Navigation />
            <ProfilBody />
            <Footer />
        </div>
    );
}

export default HomePage;