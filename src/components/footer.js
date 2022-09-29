import React from "react";
import Social from "./socialMedia";

function Footer () {
    return (
    <section className="footer">
        <div className="socialicons">
                        <Social />
                    </div>
        <section className="footer-social-media">
            <h5>Follow Us On Social Media    </h5>

        </section>
            <section className="footer-info">
                <section className="footer-right">
                    <section className="footer-name">
                    Software Developer Erickson
                    </section>
                    <section className="footer-returns">
                    Return Policy
                    </section>
                </section>
                <section className="footer-left">
                <section className="footer-name">
                    contact.app@gmail.com
                    </section>
                    <section className="footer-returns">
                    Copyright
                    </section>
                </section>
            </section>
    </section>
    )
}

export default Footer;