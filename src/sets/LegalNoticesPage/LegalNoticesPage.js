import './LegalNoticesPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import LegalNotices from '../../components/LegalNotices/LegalNotices';
import Footer from '../../components/Footer/Footer';

function LegalNoticesPage () {
    return (
        <div className="legal-notices-page">
            <Navigation />
            <LegalNotices />
            <Footer />
        </div>
    );
}

export default LegalNoticesPage;