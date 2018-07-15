import React from "react";
import Logo from "./Logo";

class Stage extends React.Component {

    constructor(props) {

        super(props);
        this.state = {email: ''};

        this.handleChange = this.handleChange.bind(this);
      }


    state = {
        modal: 0
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

    render(){

        return (
            <div className="stage">

                <Logo />

                <div className="intro">

                    <span>People love customer experience stories. We empathize with them.</span>

                    <span>After all, Customer experience is where organizations have the chance to go beyond just products and services to create emotional impact and brand loyalty. We collectively celebrate the organizations that get it right. We thrash the organizations that miss the mark.</span>

                    <span>stories.cx is a weekly newsletter that gathers the best and worst CX stories and ships them to your inbox every Friday. 1 brand, 3 stories in less that 5 minutes.</span>

                </div>

                <div className="signup">
                        <div className="email-wrap">
                            <input className="signup-email" type="email" value={ this.state.email } onChange={ this.handleChange } placeholder="✉️" />
                        </div>
                        <button className="signup-btn" disabled={!this.state.email} onClick={this.showModal}>sign me up</button>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="white" points="0,100 100,0 100,100"/>
                </svg>

                <div className={`modal-holder ${this.state.modal ? 'modal-holder-active' : ''}`}></div>
                <div className={`modal ${!this.state.modal ? 'modal-hidden' : ''}`}>
                    <div className="modal-wrap">
                    <button className="modal-close" onClick={this.hideModal}>X</button>
                        <form action="https://twitter.us18.list-manage.com/subscribe/post" method="POST" _lpchecked="1">
                            <input type="hidden" name="u" value="92ae1cfac5e13133b0285187a" />
                            <input type="hidden" name="id" value="7b51010392" />
                            <input type="text" name="MERGE1" id="MERGE1" size="25" value=""  />
                            <input type="email"  name="MERGE0" id="MERGE0" value={!!this.state.email ? this.state.email : ''}   />
                            <ul className="interestgroup_field checkbox-group"> <li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30905"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30905" name="gdpr[30905]" value="Y" className="av-checkbox" /><span>Email</span> </label> </li><li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30909"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30909" name="gdpr[30909]" value="Y" className="av-checkbox" /><span>Direct Mail</span> </label> </li><li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30913"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30913" name="gdpr[30913]" value="Y"  className="av-checkbox" /><span>Customized online advertising</span> </label> </li> </ul>
                            <input type="submit" className="formEmailButton" name="submit" value="Subscribe to list" />
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Stage;