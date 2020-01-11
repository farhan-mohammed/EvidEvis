import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Setup from '../Setup'
import Header from './Header'
import Analyzer from '../View'
import Welcome from '../welcome'
const App = () => {
	return (
		<div className="container">
            <Header></Header>
            <div className="container-body">
                <BrowserRouter >
                    <Route path="/" exact component = {Welcome}></Route>
                    <Route path="/setup" exact component={Setup} />
                    <Route path="/analyzer" exact component={Analyzer} />
                </BrowserRouter>
		    </div>
        </div>
	);
};
export default App;