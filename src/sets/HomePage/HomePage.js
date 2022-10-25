import './HomePage.scss';

import Navigation from '../../components/Navigation/Navigation';
import HomeBody from '../../components/HomeBody/HomeBody';
import Footer from '../../components/Footer/Footer';

function HomePage () {
    return (
        <div className="home-page">
            <Navigation />
            <HomeBody />
            <Footer />
        </div>
    );
}

export default HomePage;