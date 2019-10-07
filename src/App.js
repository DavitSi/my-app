import React from 'react';
import Header from './components/common/Header';
import List from './components/List/List';
import Detail from './components/detail/Detail';
import { Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={List} />
                <Route path="/currency/:id" component={Detail} />
            </Switch>
        </div>
    )
}

export default App;