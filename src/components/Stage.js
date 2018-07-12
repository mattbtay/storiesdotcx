import React from "react";

class Stage extends React.Component {


    showModal = () => {
        console.log('shown');
        const emailVal = document.getElementById('emailHolder');
        console.log(emailVal.value);
        let modalStatus = 1;
    }

    render(){

        let modalStatus = 0;

        return (
            <div className="stage">

                <header>
                    <p>stories.cx</p>
                </header>

                <div className="signup">
                    <input type="text" id="emailHolder" placeholder="your email here" />
                    <button id="submitBtn" onClick={this.showModal}>Sign me up</button>
                </div>

                <div className={`modal modal-hidden`}>
                    <form action="https://twitter.us18.list-manage.com/subscribe/post" method="POST" _lpchecked="1">
                        <input type="hidden" name="u" value="92ae1cfac5e13133b0285187a" />
                        <input type="hidden" name="id" value="7b51010392" />
                        <input type="text" name="MERGE1" id="MERGE1" size="25"  />
                        <input type="email"  name="MERGE0" id="MERGE0"   />
                        <ul className="interestgroup_field checkbox-group"> <li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30905"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30905" name="gdpr[30905]" value="Y" className="av-checkbox" /><span>Email</span> </label> </li><li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30909"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30909" name="gdpr[30909]" value="Y" className="av-checkbox" /><span>Direct Mail</span> </label> </li><li className="!margin-bottom--lv2"> <label className="checkbox" htmlFor="gdpr_30913"><input type="checkbox" data-dojo-type="dijit/form/CheckBox" id="gdpr_30913" name="gdpr[30913]" value="Y"  className="av-checkbox" /><span>Customized online advertising</span> </label> </li> </ul>
                        <input type="submit" className="formEmailButton" name="submit" value="Subscribe to list" />
                    </form>
                </div>

            </div>
        )
    }
}

export default Stage;