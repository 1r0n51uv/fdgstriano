import React from 'reactn';
import SingleTeamElement from "../elements/team/singleTeamElement";
import Navbar from "../ui/navbar";

class Team extends React.PureComponent {
    render() {
        return (

            <div>
                <Navbar/>
                <div className="section section-signup">
                    <div className="container">
                        <div className="squares square-1"></div>
                        <div className="squares square-2"></div>
                        <div className="squares square-3"></div>
                        <div className="squares square-4"></div>


                        <div className="row row-grid justify-content-between align-items-center">


                            <div className="content-center">
                                <div className="center">
                                    <div className="col-md-7">
                                        <h1 className="text-white">La nostra squadra <i className="fas fa-people-carry"/></h1>
                                        <blockquote className="blockquote blockquote-white">
                                            <p>Un' istituzione che fa da ponte tra i giovani e l'Amministrazione Comunale.
                                                Uno spazio pubblico, un punto di riferimento per i tanti ragazzi che sono alla ricerca di un confronto su quanto accade nel mondo.
                                                Un luogo dove agire per poter essere attivi al miglioramento sociale.
                                                Per chi vuole <b style={{color: '#FF8921'}}>IMPEGNARSI</b>.
                                                Per chi sente l'esigenza di <b style={{color: '#FF8921'}}>DIRE LA SUA</b>.
                                                Per chi vuole contribuire alla costruzione del <b style={{color: '#FF8921'}}>PROPRIO FUTURO</b>.
                                                Si va verso un'identità <b style={{color: '#FF8921'}}>EUROPEA</b>, non possiamo permetterci di rimanere chiusi nella nostra <b style={{color: '#FF8921'}}>PICCOLA REALTA'</b>.
                                                Scambi culturali, gestione di luoghi pubblici, ricerche, iniziative e aggiornamenti sul mondo del lavoro giovanile.
                                                Domani sarà <b style={{color: '#FF8921'}}>TARDI</b> per fare quel che si può <b style={{color: '#FF8921'}}>OGGI</b>.
                                            </p>
                                        </blockquote>

                                        <br/>
                                        <br/>
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-12">
                                <div id="images">
                                    <div className="row">


                                        <SingleTeamElement
                                            roles="Coordinatore"
                                            name="Danilo Castaldo"
                                            image="https://graph.facebook.com/1629404770/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Vice Coordinatore"
                                            name="Antonia Falco"
                                            image="https://graph.facebook.com/1454602797/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Segretario"
                                            name="Mariagrazia Lia Lubrano"
                                            image="https://graph.facebook.com/100000122793009/picture?type=large&width=720&height=720"
                                        />


                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Severino Ammirati"
                                            image="https://graph.facebook.com/1095226252/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Lidia Pagliarulo"
                                            image="https://graph.facebook.com/100000219198136/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Massimo Gigi"
                                            image="https://graph.facebook.com/100002094705982/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Riccardo Serafino"
                                            image="https://graph.facebook.com/100000314416509/picture?type=large&width=720&height=720"
                                        />


                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Giovanni Boccia"
                                            image="https://graph.facebook.com/100001619094561/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Pasquale Franzese"
                                            image="https://graph.facebook.com/100001774694480/picture?type=large&width=720&height=720"
                                        />

                                        <SingleTeamElement
                                            roles="Consigliere"
                                            name="Salvatore Marone"
                                            image="https://ae01.alicdn.com/kf/HTB1J0IINVXXXXazaFXXq6xXFXXX9/Big-mouth-sorriso-wc-adesivi-decorazioni-murali-diy-vinile-adesivos-de-paredes-home-decalcomania-mual-arte.jpg_640x640.jpg"
                                        />



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

export default Team;