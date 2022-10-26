import Navigation from '../../components/Navigation/Navigation';
import CreateCoursBody from '../../components/CreateCoursBody/CreateCoursBody';
import Footer from '../../components/Footer/Footer';

function CreateCoursPage() {
    return (
        <div className="createcours-page">
            <Navigation />
            <CreateCoursBody />
            <Footer />
        </div>
    );
}

export default CreateCoursPage;