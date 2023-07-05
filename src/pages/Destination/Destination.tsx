import { FC, useMemo, useState } from 'react';
import Page from '../../components/Page/Page';
import './Destination.scss';

interface DestinationProps {
    data: Destination[];
}

/**
 * The destination page
 *
 * @param {DestinationProps} { data }
 * @return {JSX.Element}
 */
const Destination: FC<DestinationProps> = ({ data }) => {
    // The current index of the destination being displayed
    const [currentIndex, setCurrentIndex] = useState(0);

    // The destination being displayed
    const destination = useMemo(() => data[currentIndex], [data, currentIndex]);

    return (
        <Page name="destination" number="01" title="Pick your destination">
            <div className="image">
                <img
                    key={destination.name}
                    src={destination.images.webp}
                    alt={destination.name.toLowerCase()}
                />
            </div>

            <div className="right">
                <menu className="menu">
                    {data.map((destination, index) => (
                        <li className="menuItem" key={destination.name}>
                            <button
                                className={`menuButton${index === currentIndex ? ' active' : ''}`}
                                onClick={() => setCurrentIndex(index)}>
                                {destination.name}
                            </button>
                        </li>
                    ))}
                </menu>

                <div className="infos">
                    <h2 className="name">{destination.name}</h2>

                    <p className="description">{destination.description}</p>

                    <hr className="separator" />

                    <div className="stats">
                        <div className="stat distance">
                            <span className="sub-2">Avg. distance</span>
                            <span className="sub-1">{destination.distance}</span>
                        </div>

                        <div className="stat travel">
                            <span className="sub-2">Est. travel time</span>
                            <span className="sub-1">{destination.travel}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default Destination;
