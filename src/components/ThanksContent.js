import React from "react";
import Logo from "./Logo";

class ThanksContent extends React.Component {

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

                    <h1 className="confirm__title"><span>All done!</span></h1>

                    <p className="confirm__text"><span>Your subscription to our list has been confirmed. Thank you for subscribing!</span></p>
                </div>

                <svg className="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

            </div>
            </React.Fragment>
        )}
}

export default ThanksContent;