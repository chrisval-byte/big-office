import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DecisionScreen from "../views/DecisionScreen";
import Home from "../views/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DecisionScreen/>
                </Route>
                <Route exact path="/home">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes