// import './HomePage.scss';

import Navigation from '../../components/Navigation/Navigation';
import CategoryBody from '../../components/CategoryBody/CategoryBody';
import Footer from '../../components/Footer/Footer';

function CategoryPage() {
    return (
        <div className="category-page">
            <Navigation />
            <CategoryBody />
            <Footer />
        </div>
    );
}

export default CategoryPage;