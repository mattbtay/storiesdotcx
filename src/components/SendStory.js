import React from "react";

class SendStory extends React.Component {

    render(){
        return (
            <div className="section section--sendstory">

                <h2 className="recent-title">send us your story</h2>

                <div className="storyForm--wrap">
                    <form name="story-submissions" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div>
                            <textarea placeholder="Tell us about your experience" className="story--storyContent" name="Story" />
                        </div>
                        <div>
                            <input type="hidden" name="form-name" value="story-submissions" />

                                <input className="story--company" autoComplete="off" placeholder="What company is your story about?" name="Company" type="text" />


                        </div>
                        <div className="story--userInfo">
                            <input name="Name" placeholder="Your name" autoComplete="off" type="text" />
                            <input name="Email Address" placeholder="Email address" type="email" />
                        </div>
                        <div className="story--submitWrap">
                            <button className="story--submit" type="submit">Send <span role="img" aria-label="fire">🔥</span></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SendStory;