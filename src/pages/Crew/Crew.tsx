import { FC, useMemo, useState } from 'react';
import Page from '../../components/Page/Page';
import './Crew.scss';

interface CrewProps {
    data: Crew[];
}

const Crew: FC<CrewProps> = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const crew = useMemo(() => data[currentIndex], [data, currentIndex]);

    return (
        <Page name="crew" number="02" title="Meet your crew">
            <div className="filter"></div>

            <div className="left">
                <div className="text">
                    <h4 className="role">{crew.role}</h4>
                    <h3 className="name">{crew.name}</h3>
                    <p className="description">{crew.bio}</p>
                </div>

                <menu className="menu">
                    {data.map((crew, index) => (
                        <li className="menuItem" key={crew.name}>
                            <button
                                className={`menuButton${index === currentIndex ? ' active' : ''}`}
                                onClick={() => setCurrentIndex(index)}></button>
                        </li>
                    ))}
                </menu>
            </div>

            <div className="image">
                <img src={crew.images.webp} alt={crew.name} />
            </div>
        </Page>
    );
};

export default Crew;
