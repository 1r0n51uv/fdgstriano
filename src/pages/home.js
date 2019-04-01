import React from 'reactn';
import HomeSlider from "../ui/home_slider";
import Navbar from "../ui/navbar";

class Home extends React.PureComponent {
    render() {
        return (

            <div>
                <Navbar/>

                <div className="section section-basic">

                    <div className="wrapper">

                        <HomeSlider/>
                        <h1>ciao</h1>
                        <h2>ciao</h2>
                    </div>

                </div>
            </div>



        );
    }
}

export default Home;