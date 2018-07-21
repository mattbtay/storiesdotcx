import React from "react";
import RecentStories from './RecentStories';
import Footer from './Footer';
import ConfirmContent from './ConfirmContent';
import ThanksContent from './ThanksContent';

class Confirmation extends React.Component {

    render(){
        var actionText;
        let urlParams = new URLSearchParams(window.location.search);
        let urlString = urlParams.get('action');
        if (urlString === 'subscription') {
            actionText = <ConfirmContent />
        } else if (urlString === 'confirmed') {
            actionText = <ThanksContent />
        }

        return (
            <React.Fragment>
            {actionText}


                <RecentStories />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Confirmation;