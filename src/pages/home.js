import React from 'reactn';
import Navbar from "../ui/navbar";
import path1 from "./../resources/path1.png";
import Loader from "react-loader-spinner";

import {FirestoreCollection} from "react-firestore";
import HomeCarousel from "../ui/homeCarousel";



class Home extends React.PureComponent {
    render() {
        return (

            <div>
                <Navbar/>

                <div className="section section-basic">

                    <div className="wrapper">

                        <div className="page-header header-filter">
                            <div className="squares square1"/>
                            <div className="squares square2"/>
                            <div className="squares square3"/>
                            <div className="squares square4"/>
                            <div className="squares square5"/>
                            <div className="squares square6"/>
                            <div className="squares square7"/>
                            <div className="container">
                                <div className="content-center brand">
                                    <h1 className="h1-seo">Forum <br/>dei Giovani <br/>Striano</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="main">

                            <img src={path1} className="path"/>

                            <div className="section">
                                <div className="container">
                                    <div className="row justify-content-between align-items-center">

                                        <div className="col-lg-7">

                                            <HomeCarousel/>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>



        );
    }
}

export default Home;