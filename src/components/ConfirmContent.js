import React from "react";
import Logo from "./Logo";

class ConfirmContent extends React.Component {

    render(){
        return (
            <React.Fragment>



            <div className="content">

                <svg className="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

                <div className="content__text">

                    <div className="subLogo">
                        <Logo />
                    </div>

                    <h1 className="confirm__title"><span>Almost finished</span></h1>

                    <p className="confirm__text"><span>We need to confirm your email address.</span></p>

                    <p className="confirm__text"><span>To complete the subscription process, please click the link in the email we just sent you.</span></p>

                </div>

                <svg className="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

            </div>
            </React.Fragment>
        )}
}

export default ConfirmContent;