import React from 'reactn';
import SocialButton from '../logic/socialbutton'

class Loginmodal extends React.PureComponent {

    render() {
        const handleSocialLogin = (user) => {
            console.log(user);
            this.setGlobal({
                auth: true
            })
            
        };

        const handleSocialLoginFailure = (err) => {
            console.error(err)
        };

        return (

            <div className="modal fade modal-mini modal-primary modal-mini" id="myModal1" tabIndex="-1"
                 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content" style={{backgroundColor: '#FE881C'}}>
                        <div className="modal-body">

                            <div className="text-center btn-wrapper">
                                <h2>Accedi</h2>

                                <SocialButton
                                    provider='facebook'
                                    appId='406584366387820'
                                    onLoginSuccess={handleSocialLogin}
                                    onLoginFailure={handleSocialLoginFailure}
                                    className="btn btn-icon btn-danger btn-round btn-lg">
                                    <i className="fab fa-google-plus-g"/>
                                </SocialButton>

                                <SocialButton
                                    provider='facebook'
                                    appId='406584366387820'
                                    onLoginSuccess={handleSocialLogin}
                                    onLoginFailure={handleSocialLoginFailure}
                                    className="btn btn-icon btn-facebook btn-round btn-lg">
                                    <i className="fab fa-facebook-square"/>
                                </SocialButton>

                                <SocialButton
                                    provider='facebook'
                                    appId='406584366387820'
                                    onLoginSuccess={handleSocialLogin}
                                    onLoginFailure={handleSocialLoginFailure}
                                    className="btn btn-icon btn-dribbble btn-round btn-lg">
                                    <i className="fab fa-instagram"/>
                                </SocialButton>

                            </div>

                        </div>
                        <div className="modal-footer text-center">
                            <button type="button" className="btn btn-link btn-neutral"></button>
                            <button type="button" className="btn btn-link btn-neutral" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Loginmodal;
