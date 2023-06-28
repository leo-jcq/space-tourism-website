import { FC, ReactNode } from 'react';
import './Page.scss';

interface PageProps {
    name: string;
    number: string;
    title: string;
    children: ReactNode;
}

const Page: FC<PageProps> = ({ name, number, title, children }) => {
    return (
        <div className={`page ${name.toLowerCase()}`}>
            <div className="title">
                <h5>
                    <span className="number">{number} </span>
                    {title}
                </h5>
            </div>

            <div className="content">{children}</div>
        </div>
    );
};

export default Page;
