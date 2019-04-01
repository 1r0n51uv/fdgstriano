import React from 'reactn';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class HomeSlider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 0,
        }
    }


    render() {

        return (

            <div className="section section-signup">
                <div className="container">

                    <div className="squares square-1"></div>
                    <div className="squares square-2"></div>
                    <div className="squares square-3"></div>
                    <div className="squares square-4"></div>
                    <div className="row justify-content-between">

                        <div className="col-md-7 col-sm-12">
                            <Carousel
                                showIndicators={false}
                                emulateTouch={true}
                                autoPlay={true}
                                showThumbs={false}
                                infiniteLoop={true}
                                showStatus={false}
                                selectedItem={this.state.selectedItem}
                                onChange={(e) => {
                                    this.setState({
                                        selectedItem: e,
                                    });
                                }}
                            >
                                <div>
                                    <img src="https://i.imgur.com/SvnuN4M.png" className="img-fluid" alt=""/>
                                </div>
                                <div>
                                    <img src="https://i.imgur.com/SvnuN4M.png" className="img-fluid" alt=""/>
                                </div>
                                <div>
                                    <img src="https://i.imgur.com/SvnuN4M.png" className="img-fluid" alt=""/>
                                </div>

                            </Carousel>
                        </div>

                        <div className="col-md-4">

                            <h5 className="text-on-back">0{this.state.selectedItem + 1}</h5>
                            <p className="profile-description text-left">An artist of considerable range, Ryan — the
                                name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
                                records all of his own music, giving it a warm, intimate feel with a solid groove
                                structure. An artist of considerable range.</p>
                            <div className="btn-wrapper pt-3">
                                <button href="#/" className="btn btn-simple btn-info">
                                    <i className="tim-icons icon-bulb-63"></i> Leggi di più
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default HomeSlider;