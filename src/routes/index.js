import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DecisionScreen from "../views/DecisionScreen";
import FabricacionPage from "../views/FabricacionPage";
import ReparacionPage from "../views/ReparacionPage";
import ContactSection from "../components/commonSections/ContactSection";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <DecisionScreen/>
                </Route>
                <Route exact path="/fabricaciones">
                    <FabricacionPage/>
                </Route>
                <Route exact path="/reparaciones">
                    <ReparacionPage/>
                </Route>
                <Route exact path="/contacto">
                    <ContactSection/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes