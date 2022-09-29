import React from "react";
import './about.css'
import Bookmark from "./bookmark";
import Footer from "./footer"

export default function About() {
    return (
    <div>
    <div className="about-section">
      <h5>Bookmark Us Below</h5>
      <Bookmark />
        <h1>About Us Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </div>

<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <div className="container">
        <h2>Tony Erickson</h2>
        <p className="title">CEO and Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>TonyErickson@example.com</p>
      </div>
    </div>
  </div>

  <div className="column2">
    <div className="card">
      <div className="container">
        <h2>Lucas Dean</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>LucasDean@example.com</p>
      </div>
    </div>

  </div>
</div>
<div>
</div>
<Footer />
</div>

    );
    
};
