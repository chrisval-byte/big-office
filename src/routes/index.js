import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "../views/Home"

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes