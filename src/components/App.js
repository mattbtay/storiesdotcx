import React from "react";
import Stage from "./Stage";
import RecentStories from "./RecentStories";
import Footer from "./Footer";

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Stage />
                <RecentStories />
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;