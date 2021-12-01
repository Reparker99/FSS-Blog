import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Details from './views/Details';
import Compose from './views/Compose';
import Admin from './views/Admin';

const App: React.FC<AppProps> = (props) => {
    return (
        <BrowserRouter>
		<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:blogid" element={<Details />} />
				<Route path="/compose" element={<Compose />} />
				<Route path="/admin/:blogid" element={<Admin />} />
			</Routes>
		</BrowserRouter>
    );
};

interface AppProps {}

export default App;