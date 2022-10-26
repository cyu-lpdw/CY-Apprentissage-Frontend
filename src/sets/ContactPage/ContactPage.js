import './ContactPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function ContactPage () {
    return (
        <div className="contact-page">
            <Navigation />
            <Contact />
            <Footer />
        </div>
    );
}

export default ContactPage;