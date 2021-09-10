import {Component} from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
        return (
            <Map google={this.props.google}
                 style={{width: "80%", height: "80%"}}
                 initialCenter={{lat: 14.588079027026478, lng: -90.50217351291558}}
                 zoom={18}>
                <Marker name={'Current location'} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA810T5hlguJGqHNIbaJ3btiyIXT1jb1cI"
})(MapContainer)