import React from 'reactn';
import MapGL, {Marker } from '@urbica/react-map-gl'

const TOKEN2 = 'pk.eyJ1IjoiMXIwbjUxdXYiLCJhIjoiY2pxcnluZnQzMDMxeTN4cGtoM2NxdnZpdSJ9.siHCgO01F4RqIzTqz9Z9ag';

class MapComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 40.8130618,
                longitude: 14.5788172,
                zoom: 14,
            },
            marker: {
                latitude: 40.8165520,
                longitude: 14.6001480,
            },
            isOpen: true
        };
    }

    render() {


        const Element = <a onClick={() => {
            this.setState({isOpen: true
            })}
        } href="https://www.google.com/maps/place/Centro+Sociale/@40.8193571,14.581005,14z/data=!4m5!3m4!1s0x133bb9edeeb5005d:0xf963f9d505023797!8m2!3d40.8152616!4d14.578228"><i style={{fontSize: '400%', color: 'red'}} className="fas fa-map-marker-alt"/></a>

        return (

            <div className="container">
                <div className="row">

                    <div className="col-md-12">

                        <MapGL
                            style={{ width: "100%", height: "400px", marginTop: "2%" }}
                            mapStyle="mapbox://styles/mapbox/streets-v9"
                            accessToken={TOKEN2}
                            {...this.state.viewport}>
                            <Marker
                                longitude={this.state.marker.longitude}
                                latitude={this.state.marker.latitude}
                                element={Element}
                            />
                        </MapGL>

                    </div>

                </div>

            </div>

        );
    }
}

export default MapComponent;