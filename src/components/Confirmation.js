import React from "react";
import Stage from "./Stage";
import RecentStories from "./RecentStories";
import SendStory from "./SendStory";
import Footer from "./Footer";

class Confirmation extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Stage />
                <RecentStories />
                <SendStory />
                <Footer />
            </React.Fragment>
        )
    }
}

export default Confirmation;