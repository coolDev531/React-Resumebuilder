import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, NavLink, Switch } from 'react-router-dom';
import './Navbar.css';
import Home from './Home';
import CreateResume from './CreateResume';
import { ToastContainer, Slide } from 'react-toastify';

export default function RBNavbar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="light" sticky="top" className="bg-light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand >
                    <Nav.Link as={NavLink} to="/">
                        <span className="brand">Resume <strong className="">Builder</strong></span>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>Resume Templates</Nav.Link>
                        <Nav.Link>Resume Examples</Nav.Link>
                        <Nav.Link>Resources</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link as={NavLink} to="/create-resume" className="text-muted mr-4"
                            isActive={(match, location) => {
                                return (location.pathname.split("/")[1] === "create-resume");
                            }}
                            activeClassName="text-dark blue-active">
                            Create Resume
						</Nav.Link>
                        <Nav.Link>
                            <Button size="sm" variant="outline-primary" >Sign Up</Button>
                        </Nav.Link>
                        <Nav.Link>
                            <Button size="sm" variant="primary" >Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                transition={Slide}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-resume" component={CreateResume} exact />
            </Switch>
        </>
    )
}