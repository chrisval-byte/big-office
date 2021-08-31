import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DecisionScreen from "../views/DecisionScreen";
import Home from "../views/Home";
import ReparacionPage from "../views/ReparacionPage";

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
                <Route exact path="/reparaciones">
                    <ReparacionPage/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes