import React, {Component} from 'react';
import {FirestoreDocument} from "react-firestore";

class HomeSliderDescription extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" >

                <div className="card-body">

                    <FirestoreDocument
                        path={'homeSlider/' + this.props.sliderIndex}
                        render={({ isLoading, data }) => {
                            return isLoading ? (
                                <h1/>
                            ) : (
                                <div>
                                    <h1>{data.body}</h1>
                                </div>
                            );
                        }}
                    />

                </div>



            </div>
        );
    }
}

export default HomeSliderDescription;