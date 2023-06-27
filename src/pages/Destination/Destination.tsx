import { FC } from 'react';
import './Destination.scss';

interface DestinationProps {
    data: Destination[];
}

const Destination: FC<DestinationProps> = () => {
    return <div className="destination">Destination</div>;
};

export default Destination;
