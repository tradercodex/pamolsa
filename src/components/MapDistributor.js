
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import googleMapStyles from "./style";

function View({
    google,
    ubications,
    ubication
}) {

    console.log(ubication)

    const mapStyles = {
        googleMapStyles
    };

    const mapContent = {
        width: '100%',
    }

    return (
        <div>
            {
                ubication.longitude ?
                    <div className="Map" id="map" style={{ height: "600px" }}>
                        <Map
                            google={google}
                            style={mapContent}
                            styles={mapStyles.googleMapStyles.mapStyles}
                            zoom={6}
                            initialCenter={{ lat: -10.939772, lng: -73.069215 }}
                        >
                            <Marker
                                key={ubication.id}
                                position={{ lat: Number(ubication.latitude), lng: Number(ubication.longitude) }} />
                        </Map>
                    </div> :
                    <div className="Map" id="map" style={{ height: "600px" }}>
                        <Map
                            google={google}
                            style={mapContent}
                            styles={mapStyles.googleMapStyles.mapStyles}
                            zoom={6}
                            initialCenter={{ lat: -10.939772, lng: -73.069215 }}
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
            }
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
    apiKey: 'AIzaSyCvcH0wnL1CUPM7DpB67vilxA_5wY1DWc0',
    LoadingContainer: LoadingContainer
})(View);

