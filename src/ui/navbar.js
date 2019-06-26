import React from 'reactn';
import {Link} from "react-router-dom";

class Navbar extends React.PureComponent {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top bg-info">
                <div className="container">
                    <div className="navbar-translate">
                        <a className="navbar-brand" href="/home">
                            <span>FDGS</span>triano
                        </a>
                        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navigation" aria-controls="navigation-index" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-bar bar1"></span>
                            <span className="navbar-toggler-bar bar2"></span>
                            <span className="navbar-toggler-bar bar3"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse justify-content-end" id="navigation">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-brand">
                                    <a href="/home">
                                        FDGS
                                    </a>
                                </div>
                                <div className="col-6 collapse-close text-right">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                                            data-target="#navigation" aria-controls="navigation-index"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="tim-icons icon-simple-remove"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav">


                            <li className="nav-item p-0">
                                <Link to={'/home'}>
                                    <a href="#" className="nav-link"><i className="fas fa-home"></i>Home</a>
                                </Link>

                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/blog'}>
                                    <a href="/blog" className="nav-link"><i className="far fa-newspaper"/>Blog</a>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/team'}>
                                    <a href="/team" className="nav-link"><i className="fas fa-users"/>Team</a>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/ppr'}>
                                    <a href="ppr" className="nav-link"><i className="far fa-lightbulb"/>PPR</a>
                                </Link>
                            </li>

                            <li className="nav-item p-0">
                                <Link to={'/library'}>
                                    <a href="/library" className="nav-link"><i className="fas fa-book-open"/>Biblioteca</a>
                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>


            </nav>
        );
    }
}

export default Navbar;