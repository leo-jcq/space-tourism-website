import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: FC = () => {
    return (
        <div className="home">
            <div className="text">
                <h5>So, you want to travel to</h5>
                <h1>Space</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!
                </p>
            </div>

            <Link to="destination" className="explore">
                Explore
            </Link>
        </div>
    );
};

export default Home;
