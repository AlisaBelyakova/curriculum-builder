import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        {/* <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
                <p className="label"> News Letter </p>
                <input type="email" class="form-control" id="email" placeholder="alex@gmail.com"/>
            </div>
            <button type="submit" class="btn btn-success mb-2">Sign Up</button>
        </form> */}
        <span>© 2018 Copyright
            <a href="#"> Ecosystemone LLC</a>
        </span>
      </div>
    );
  }
}

export default Footer;
