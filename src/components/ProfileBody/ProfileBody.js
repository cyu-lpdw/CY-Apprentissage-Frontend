import './ProfileBody.scss';

function ProfileBody () {
    return (
        <div className="profile-body">
            <div className="profile-lead">
                <div className="profile-title">
                    Bienvenue dans votre espace
                </div>
                <button className="create-button">
                    Créer un cours
                </button>
            </div>
            <div className="profile-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend. Proin non turpis fringilla, hendrerit risus ac, ullamcorper turpis. Proin fringilla metus enim, nec congue nisl volutpat nec. Nulla a dignissim eros. Aliquam ornare quis eros vel commodo. Etiam quis cursus massa. Ut finibus erat massa, sit amet tristique nibh ultricies et. Pellentesque dapibus dui ut enim lacinia cursus. Morbi non euismod leo, non tristique dui. Ut maximus ac elit et ullamcorper. Praesent vitae auctor velit. Aenean tincidunt dolor eu eros imperdiet, sed congue augue eleifend.
            </div>
            <div className="profile-soon">
                Nouvelles fonctionnalités bientôt disponible
            </div>
        </div>
    );
}

export default ProfileBody;