import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from './Home';
import Countdown from './Components/Countdown';
import Quiz from './Components/Quiz';

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/countdown" component={Countdown} />
                <Route path="/quiz" component={Quiz} />
                <Redirect path="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
