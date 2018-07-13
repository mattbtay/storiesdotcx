import React from "react";

class RecentStories extends React.Component {

    render(){
        return (
            <React.Fragment>
            <h2 class="recent-title">featuring</h2>
            <div className="recent">
                <img src="/images/logos/thyssenkrupp.png" alt="thyssenkrupp elevator" />
            </div>
            </React.Fragment>
        )
    }
}

export default RecentStories;