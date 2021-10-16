import React from 'react'
import './Home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="section-1">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/assets/resume-image-1.jpg'} className="resume-image resume-image-1" alt=""></img>
                        <img src={process.env.PUBLIC_URL + '/assets/resume-image-2.jpg'} className="resume-image resume-image-2" alt=""></img>
                        <img src={process.env.PUBLIC_URL + '/assets/resume-image-3.jpg'} className="resume-image resume-image-3" alt=""></img>
                    </div>
                    <div className="section-1-contents">
                        <h2>Try Our Professional Resume Builder Now!</h2>
                        <span>Save time with our easy 3-step resume builder. No more writer’s block or formatting difficulties in Word. Rapidly make a perfect resume employers love.</span>
                        <Link to="/create-resume">
                            <Button size="lg" variant="primary" className="create-btn">Create My resume</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <p className="d-flex justify-content-center">Where are they getting hired?</p>
                <div className="companies container mb-4">
                    <img src={process.env.PUBLIC_URL + '/assets/BBC-logo.png'} className="company-logo-1 p-1" alt=""></img>
                    <img src={process.env.PUBLIC_URL + '/assets/airbnb-logo.png'} className="company-logo-1 p-1" alt=""></img>
                    <img src={process.env.PUBLIC_URL + '/assets/apple-logo.svg'} className="company-logo-3  p-1" alt=""></img>
                    <img src={process.env.PUBLIC_URL + '/assets/google-logo.png'} className="company-logo-1  p-1" alt=""></img>
                    <img src={process.env.PUBLIC_URL + '/assets/tesla-logo1.png'} className="company-logo-5  p-1" alt=""></img>
                </div>
                <div className="d-flex justify-content-center">
                    <Button size="lg" variant="" className="upgrad-btn mt-4">Upgrad Your resume</Button>
                </div>
            </div>

            <Footer />
        </>
    )
}