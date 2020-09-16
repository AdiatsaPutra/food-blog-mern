import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../Home';
import CreateRecipe from '../CreateRecipe';
import DetailRecipe from '../DetailRecipe';

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <Switch>
                    <Route path="/create-recipe">
                        <CreateRecipe />
                    </Route>
                    <Route path="/detail-recipe">
                        <DetailRecipe />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            <p>Footer</p>
        </div>
    )
}

export default MainApp
