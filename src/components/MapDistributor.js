
import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react'
import googleMapStyles from "./style";

function View({
    google,
    ubications
}) {

    const mapStyles = {
        googleMapStyles
    };

    const mapContent = {
        width: '100%',
    }

    return (
        <div>
            <div className="Map" id="map" style={{height: "600px"}}>
                <Map
                    google={google}
                    // onClick={onMapClicked}
                    style={mapContent}
                    styles={mapStyles.googleMapStyles.mapStyles}
                    zoom={11}
                    initialCenter={{ lat: -11.939772, lng: -77.069215 }}
                >
                    {
                        ubications.map(item => (
                            <Marker
                                key={item.id}
                                position={{ lat: item.latitude, lng: item.longitude }} />
                        ))
                    }
                </Map>
            </div>
        </div>
    );
}


const LoadingContainer = () => {
    return (
        <div className="body">
            <div id="loader">
                <div id="shadow"></div>
                <div id="box"></div>
            </div>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBLuh-I2aUKLTjf7L7ZGLuTlxCvPs0T3Bk',
    LoadingContainer: LoadingContainer
})(View);

