import React from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class SendStory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { Name: "", Email: "", Story: "", Company: "" };
      }

      /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "story-submissions", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        e.preventDefault();
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){

        const { Name, Email, Story, Company } = this.state;

        return (
            <div className="section section--sendstory">

                <h2 className="recent-title">send us your story</h2>

                <div className="storyForm--wrap">
                    <form onSubmit={ this.handleSubmit }>
                        <div>
                            <textarea placeholder="Tell us about your experience" className="story--storyContent" value={Story} onChange={ this.handleChange } name="Story" />
                        </div>
                        <div>

                            <input className="story--company" autoComplete="off" placeholder="What company is your story about?" name="Company" value={ Company } onChange={this.handleChange} type="text" />


                        </div>
                        <div className="story--userInfo">
                            <input name="Name" placeholder="Your name" autoComplete="off" value={ Name } onChange={this.handleChange} type="text" />
                            <input name="Email" placeholder="Email address" value={ Email } onChange={this.handleChange} type="email" />
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