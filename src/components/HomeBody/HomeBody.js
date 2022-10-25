import './HomeBody.scss';

import { FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from "react-icons/fa";

function HomeBody() {
    return (
        <div className="home-body">
            <div className="brand">
                <div className="brand-name">
                    CY Apprentissage
                </div>
                <div className="brand-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend. Proin non turpis fringilla, hendrerit risus ac, ullamcorper turpis. Proin fringilla metus enim, nec congue nisl volutpat nec. Nulla a dignissim eros. Aliquam ornare quis eros vel commodo. Etiam quis cursus massa. Ut finibus erat massa, sit amet tristique nibh ultricies et. Pellentesque dapibus dui ut enim lacinia cursus. Morbi non euismod leo, non tristique dui. Ut maximus ac elit et ullamcorper. Praesent vitae auctor velit. Aenean tincidunt dolor eu eros imperdiet, sed congue augue eleifend.
                </div>
            </div>
            <div className="categories">
                <div className="category-box">
                    <div className="category-left">
                        <div className="category-name">HTML</div>
                        <div className="category-icon"><FaHtml5 /></div>
                    </div>
                    <div className="category-right">
                        <div className="category-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                        </div>
                    </div>
                </div>

                <div className="category-box">
                    <div className="category-left">
                        <div className="category-name">CSS</div>
                        <div className="category-icon"><FaCss3Alt /></div>
                    </div>
                    <div className="category-right">
                        <div className="category-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                        </div>
                    </div>
                </div>

                <div className="category-box">
                    <div className="category-left">
                        <div className="category-name">JS</div>
                        <div className="category-icon"><FaJsSquare /></div>
                    </div>
                    <div className="category-right">
                        <div className="category-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                        </div>
                    </div>
                </div>

                <div className="category-box">
                    <div className="category-left">
                        <div className="category-name">PHP</div>
                        <div className="category-icon"><FaPhp /></div>
                    </div>
                    <div className="category-right">
                        <div className="category-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque et nulla at pretium. Nulla posuere lorem vel magna vehicula, a auctor massa eleifend.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBody;