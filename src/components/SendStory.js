import React from "react";

class SendStory extends React.Component {

    render(){
        return (
            <div className="section section--sendstory">
                <div>
                    <form name="story-submissions" method="POST" netlify>
                        <input name="name" type="text" />
                        <textarea name="story" />
                        <button type="submit">send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SendStory;