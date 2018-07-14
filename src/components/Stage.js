import React from "react";

class Stage extends React.Component {

    emailRef = React.createRef();

    state = {
        modal: 0,
        email:undefined
    }

    showModal = () => {
        //const emailVal = document.getElementById('emailHolder');
        this.setState({
            modal: 1,
            email: this.emailRef.value.value
        })
    }

    hideModal = () => {
        this.setState({
            modal:0
        })
    }

    render(){

        return (
            <div className="stage">

                <header>
                    <p>stories.cx</p>
                </header>

                <h1 className="logo"><img src="./images/logo.png" alt="stories.cx main logo" /></h1>

                <p className="intro">Fam pug beard, wolf cray irony narwhal salvia taxidermy copper mug cardigan synth kinfolk vexillologist. Adaptogen woke disrupt etsy XOXO literally master cleanse vegan synth. Palo santo cold-pressed portland wolf try-hard cronut jianbing aesthetic prism mixtape occupy tbh.</p>

                <div className="signup">
                        <div className="email-wrap">
                            <input className="signup-email" type="text" ref={ this.emailRef } value={undefined} placeholder="your email here" />
                        </div>
                        <button className="signup-btn" onClick={this.showModal}>sign me up</button>

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
                            <input type="email"  name="MERGE0" id="MERGE0" value={!!this.state.email ? this.state.email : undefined}   />
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