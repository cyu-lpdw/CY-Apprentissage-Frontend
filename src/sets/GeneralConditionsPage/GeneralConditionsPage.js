import './GeneralConditionsPage.scss';

import Navigation from '../../components/Navigation/Navigation';
import GeneralConditions from '../../components/GeneralConditions/GeneralConditions';
import Footer from '../../components/Footer/Footer';

function GeneralConditionsPage () {
    return (
        <div className="general-conditions-page">
            <Navigation />
            <GeneralConditions />
            <Footer />
        </div>
    );
}

export default GeneralConditionsPage;