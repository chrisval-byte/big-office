import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DecisionScreen from "../views/DecisionScreen";
import FabricacionPage from "../views/FabricacionPage";
import ReparacionPage from "../views/ReparacionPage";
import ContactSection from "../components/commonSections/ContactSection";
import Mesg from "../views/Mesg";
import AboutSection from "../components/commonSections/AboutSection";
import UbicationSection from "../components/commonSections/LocationSection";

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
                <Route exact path="/access">
                    <Mesg/>
                </Route>
                <Route exact path="/nosotros">
                    <AboutSection/>
                </Route>
                <Route exact path="/ubicacion">
                    <UbicationSection/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes