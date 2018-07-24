import React from "react";
import Stage from "./Stage";
import RecentStories from "./RecentStories";
import SendStory from "./SendStory";
import Footer from "./Footer";

class App extends React.Component {

    render(){
        return (
            <div>
                <Stage />
                <RecentStories />
                <SendStory />
                <Footer />
            </div>
        )
    }
}

export default App;