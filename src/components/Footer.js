import React from 'react'
import './Home.css';

export default function Footer() {
    return (
        <div className="section-3">
            <div className="footer companies">
                <ul>
                    <li>Resume builder</li>
                    <li>Resume templates</li>
                    <li>Resume formatting</li>
                    <li>Resources</li>
                    <li>Resume writing guide</li>
                </ul>
                <ul>
                    <li>Professional resume</li>
                    <li>Entry-level resume</li>
                    <li>Student resume</li>
                    <li>Resume writing</li>
                </ul>
                <ul>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                    <li>Terms and conditions</li>
                </ul>
                <ul>
                    <li>Media Kit</li>
                    <li>Pricing</li>
                    <li>About Us</li>
                </ul>
            </div>
            <hr className="bg-light"></hr>
        </div>
    )
}