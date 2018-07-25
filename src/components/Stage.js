import React from "react";
import Logo from "./Logo";

class Stage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            email: '',
            modal: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
      }

    showModal = () => {
        //const emailVal = document.getElementById('emailHolder');
        this.setState({
            modal: 1,
            email: this.state.email
        })
    }

    handleChange = (e) => {
        this.setState({email: e.target.value})
    }

    hideModal = () => {
        this.setState({
            modal:0
        })
    }

    handleEnter = (e) => {
        if(e.key === 'Enter'){
            this.setState({email: e.target.value})
            console.log(this.state.email)
            this.showModal();
          }
    }

    render(){

        return (
            <div className="stage">

                <Logo />

                <div className="intro">

                    <span>Everyone loves a good customer experience story. After all, great CX goes beyond just winning our business - It’s where brands win our hearts. </span>

                    <span>We believe great customer experiences are worth celebrating.</span>

                    <span>stories.cx is a weekly newsletter that gathers the best CX stories and ships them to your inbox every Friday. Sign up the 5 minute read and learn which brands are ready to exceed your expectations. </span>

                </div>

                <div className="signup">
                        <div className="email-wrap">
                            <input className="signup-email" type="email" value={ this.state.email } onKeyPress={ this.handleEnter } onChange={ this.handleChange } placeholder="✉️" />
                        </div>
                        <button className="signup-btn" disabled={!this.state.email} onClick={this.showModal}>sign me up</button>

                </div>

                <svg className="svg-bottom" width="100" height="100!impo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

                <div className={`modal-holder ${this.state.modal ? 'modal-holder-active' : ''}`}></div>
                <div className={`modal ${!this.state.modal ? 'modal-hidden' : ''}`}>
                    <div className="modal-wrap">
                    <button className="modal-close" onClick={this.hideModal}>X</button>

                        <div className="modal-content">

                            <p className="modal-intro">Let's finish out a couple of house cleaning items, we want to make sure you know what we're doing with your information, and that you have control of what and how we communicate with you in the future.</p>

                            <form action="https://twitter.us18.list-manage.com/subscribe/post" method="POST" _lpchecked="1">

                                <input type="hidden" name="u" value="92ae1cfac5e13133b0285187a" />
                                <input type="hidden" name="id" value="7b51010392" />


                                <input className="modal-input" autoComplete="off" type="text" placeholder="name" name="MERGE1" id="MERGE1" size="25"  />
                                <input className="modal-input" type="email" placeholder="email address" name="MERGE0" id="MERGE0" value={!!this.state.email ? this.state.email : ''}   />

                                <ul className="interestgroup_field checkbox-group">
                                    <li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30905"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30905" name="gdpr[30905]" value="Y" className="av-checkbox" /><span>I would like to receive weekly email newsletters</span> </label> </li>
                                </ul>

                                <input type="submit" className="formEmailButton" name="submit" value="Sign me up" />
                            </form>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Stage;