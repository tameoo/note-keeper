import React from 'react';
import {HomePage, NotePage} from '../pages';
import {Route,Switch} from 'react-router-dom';
import Header from '../header';

const App = () => {
    return (
        <React.Fragment>       
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact/>
                <Route path="/notepage" component={NotePage}/>
            </Switch>
        </React.Fragment> 
    );
}

export default App;