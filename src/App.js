import {Character, Login, Registry} from "./ui/screen";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login/>
                </Route>
                <Route path="/registry">
                    <Registry/>
                </Route>
                <Route path="/character">
                    <Character/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
