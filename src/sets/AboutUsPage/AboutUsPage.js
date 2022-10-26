import './AboutUsPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import AboutUs from '../../components/AboutUs/AboutUs';
import Footer from '../../components/Footer/Footer';

function AboutUsPage () {
    return (
        <div className="about-us-page">
            <Navigation />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default AboutUsPage;