import React, {Component} from 'react';
import MapComponent from "./mapComponent";

class ContactsLibrary extends Component {
    render() {
        return (
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-12">

                        <div className="card">

                            <div className="card-header">
                                <div className="row justify-content-center">

                                    <div className="col-md-6" style={{paddingLeft: '3%', paddingTop: '2%'}}>
                                        <h1 className="text-white text-center">Se il libro è disponibile, puoi prenderlo in prestito quando vuoi
                                            per una durata massima di 3 mesi
                                        </h1>
                                        <div className="text-center">
                                            <button className="btn btn-warning">
                                                <i className="fas fa-map-signs" style={{fontSize: '120%'}}/> Raggiungici</button>
                                            <p>oppure contattaci</p>
                                            <button className="btn btn-facebook"><i className="fab fa-facebook-square" style={{fontSize: '120%'}}/> Facebook</button>
                                            <button className="btn btn-danger" style={{marginLeft: '2%', marginRight: '2%'}}><i className="fab fab fa-instagram" style={{fontSize: '120%'}}/> Instagram</button>
                                            <button className="btn btn-success"><i className="fas fa-envelope" style={{fontSize: '120%'}}/> Email</button>
                                        </div>

                                    </div>

                                    <div className="col-md-6">

                                        <blockquote className="blockquote-white blockquote">

                                            <h3 style={{color: '#FF8921'}}>Ci trovi in: </h3>
                                            <h2>Via Beniamino Marciano, 42 <br/>
                                                Biblioteca Comunale Striano
                                                <br/>
                                                80040 Striano (NA)</h2>
                                        </blockquote>

                                    </div>

                                </div>


                            </div>

                            <div className="card-body">
                                <MapComponent/>
                            </div>

                        </div>



                    </div>



                </div>

                <div className="squares square-3"></div>
                <div className="squares square-4"></div>
            </div>
        );
    }
}

export default ContactsLibrary;