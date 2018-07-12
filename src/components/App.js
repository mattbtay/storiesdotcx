import React from "react";
import Stage from "./Stage";
import RecentStories from "./RecentStories";

class App extends React.Component {

    render(){
        return (
            <React.Fragment>
                <Stage />
                <RecentStories />
            </React.Fragment>
        )
    }
}

export default App;