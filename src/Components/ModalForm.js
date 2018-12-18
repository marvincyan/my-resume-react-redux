import React, { Component } from 'react';
var currentURL = window.location.origin + window.location.pathname;

class ModalForm extends Component {
    render() {
        return(
            <form action="https://formspree.io/marvincyan@gmail.com" method="post">
                <input type="hidden" name="_next" value={currentURL+"?form=submitted"} />
                <input type="hidden" name="_format" value="plain" />

                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="Name" className="form-control" placeholder="Your Name..." required />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="email" name="_replyto" className="form-control" placeholder="Please Enter Your Email..." required />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="_subject" className="form-control" placeholder="Your Project Title..." required />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select name="Category" className="form-control" defaultValue="" required>
                                        <option value="" disabled>-Project Category-</option>
                                        <option value="Web Development">Web Development</option>
                                        <option value="UI/UX Designer">UI/UX Designer</option>
                                        <option value="SEO">SEO</option>
                                        <option value="WordPress">WordPress</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                                <div className="form-group">
                                    <select name="Budget" className="form-control" defaultValue="" required>
                                        <option value="" disabled>-Budget-</option>
                                        <option value="< $100">&lt; $100</option>
                                        <option value="$100 - $500">$100 - $500</option>
                                        <option value="$500 - $1000">$500 - $1000</option>
                                        <option value="$1000 - $2000">$1000 - $2000</option>
                                        <option value="$2000 - $5000">$2000 - $5000</option>
                                        <option value="$5000+">$5000+</option>
                                    </select>
                                </div>
                            </div>
                                
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="Date" className="form-control" placeholder="-Estimate Date-" />
                                </div>
                            </div>
                            
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea name="Description" rows="9" className="form-control" placeholder="Your Message..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 estimate-container">
                        <div className="estimate-text">
                            <div className="estimate-title">Is An Estimate Required?</div>
                            <div className="radio">
                                <input type="radio" id="estimateZERO" name="Estimate" value="No" defaultChecked />
                                <label htmlFor="estimateZERO">No Estimate Required</label>
                            </div>
                                    
                            <div className="radio">
                                <input type="radio" id="estimateONE" name="Estimate" value="Yes" />
                                <label htmlFor="estimateONE">Yes, I require an estimate cost of services. I understand I need to allow 2-4 business days to receive the estimate.</label>
                            </div>
                                                                                      
                            <button type="submit" className="btn btn-outline-dark w-100" value="SEND OFFER">SEND OFFER</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default ModalForm;