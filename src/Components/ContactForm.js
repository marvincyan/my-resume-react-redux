import React, { Component } from 'react';
var currentURL = window.location.origin + window.location.pathname;

class ContactForm extends Component {
    render() {
        return(
            <form action="https://formspree.io/marvincyan@gmail.com" method="post" className="contactForm">
                <input type="hidden" name="_next" value={currentURL+"?form=submitted"} />
                <input type="hidden" name="_format" value="plain" />

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="Name" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Your Name..." required />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="email" name="_replyto" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Please Enter Your Email..." required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="text" name="_subject" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Please Enter a Subject..." required />
                </div>
                <div className="form-group">
                    <textarea name="Message" cols="40" rows="10" className="form-control" aria-required="true" aria-invalid="false" placeholder="Your Message..."></textarea>
                </div>
                <p>
                    <button type="submit" className="btn btn-light w-25" value="SEND">SEND</button>
                    <span className="ajax-loader"></span>
                </p>
            </form>
        );
    }
}

export default ContactForm;