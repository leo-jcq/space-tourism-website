import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import dataFile from './assets/data/data.json';
import Header from './components/Header/Header';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Home from './pages/Home/Home';
import Technology from './pages/Technology/Technology';

/**
 * The main app
 *
 * @return {JSX.Element}
 */
const App: FC = () => {
    /**
     * The dataFile that contains all of the data for the app
     * 
     * @type {dataType}
     */
    const data: dataType = dataFile;

    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination data={data.destinations} />} />
                <Route path="/crew" element={<Crew data={data.crew} />} />
                <Route path="/technology" element={<Technology data={data.technology} />} />
            </Routes>
        </div>
    );
};

export default App;
