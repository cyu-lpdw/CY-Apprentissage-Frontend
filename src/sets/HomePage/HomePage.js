import './HomePage.scss';

import Navigation from '../../components/Navigation/Navigation';
import HomeBody from '../../components/HomeBody/HomeBody';

function HomePage () {
    return (
        <div className="home-page">
            <Navigation />
            <HomeBody />
        </div>
    );
}

export default HomePage;