import React from "react";
import RecentStories from "./RecentStories";
import SendStory from "./SendStory";
import Footer from "./Footer";

class Confirmation extends React.Component {

    render(){
        return (
            <React.Fragment>
                <RecentStories />
                <SendStory />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Confirmation;