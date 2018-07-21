import React from "react";
import Logo from "./Logo";

class Content extends React.Component {

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

                    <h1>Almost finished</h1>

                    <p>We need to confirm your email address.</p>

                    <p>To complete the subscription process, please click the link in the email we just sent you.</p>

                </div>

                <svg className="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

            </div>
            </React.Fragment>
        )}
}

export default Content;