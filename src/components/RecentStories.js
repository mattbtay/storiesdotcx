import React from "react";

class RecentStories extends React.Component {

    render(){
        return (
            <React.Fragment>
            <h2 className="recent-title">featuring</h2>
            <div className="recent">
                <div><img src="/images/logos/thyssenkrupp.jpg" alt="thyssenkrupp elevator" /></div>
                <div><img src="/images/logos/nest_logo.jpg" alt="thyssenkrupp elevator" /></div>
                <div><img src="/images/logos/Walmart-logo.jpg" alt="thyssenkrupp elevator" /></div>
            </div>
            </React.Fragment>
        )
    }
}

export default RecentStories;