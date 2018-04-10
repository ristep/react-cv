import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/css/Home.css'

// The Header creates links that can be used to navigate
// between routes.
const Fute = () => (
				<footer className="w3-container w3-card w3-center w3-teal">
				{/* <hr/> */}
				{/* <p className="w3-xlarge"><b><i className="fa fa-download fa-fw w3-text-teal w3-margin"></i>Download</b></p> */}
				<a className="w3-button w3-left" href="http://capirp.us.to/download/ArSoft-Resume.pdf">ArSoft-Resume.pdf</a>
				<a className="w3-button w3-left" href="http://capirp.us.to/download/ArSoft-CV.pdf">ArSoft-CV.pdf</a>
				<a href="https://github.com/ristep" target="_blank" rel="noopener noreferrer"><i className="fa fa-github w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://www.instagram.com/ristepan/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://www.linkedin.com/in/riste-panovski-94041552" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://www.facebook.com/ristepan" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://twitter.com/ristepan" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://www.pinterest.com/ristepan" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest-p w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				<a href="https://plus.google.com/+RistePanovski" target="_blank" rel="noopener noreferrer"><i className="fa fa-google-plus w3-hover-opacity w3-xlarge w3-padding-small w3-teal"></i></a>
				{/* <hr /> */}
			</footer>
)

export default Fute;
