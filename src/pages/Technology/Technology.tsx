import { FC, useMemo, useState } from 'react';
import Page from '../../components/Page/Page';
import './Technology.scss';

interface TechnologyProps {
    data: Technology[];
}

const Technology: FC<TechnologyProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const technology = useMemo(() => data[currentIndex], [data, currentIndex]);

    return (
        <Page name="technology" number="03" title="Space launch 101">
            <div className="left">
                <menu className="menu">
                    {data.map((technology, index) => (
                        <li className="menuItem" key={technology.name}>
                            <button
                                className={`menuButton${index === currentIndex ? ' active' : ''}`}
                                onClick={() => setCurrentIndex(index)}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </menu>

                <div className="text">
                    <span className="terminology">The terminology...</span>
                    <h3 className="name">{technology.name}</h3>
                    <p className="description">{technology.description}</p>
                </div>
            </div>

            <div className="image">
                <img src={technology.images.portrait} alt={technology.name} className="portrait" />

                <img
                    src={technology.images.landscape}
                    alt={technology.name}
                    className="landscape"
                />
            </div>
        </Page>
    );
};

export default Technology;
