import React from 'react';
import './styles/css/Home.css';

// import 'font-awesome';
// import { Card, CardBody, CardImg, CardSubtitle, Carda, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import { ajax } from './AjaxAxios';
import jabeja from './assets/poMladCB.png';
import worker from './assets/worker01.svg'

const maxwid = {
	MaxWidth: '1400px',
};

class Home extends React.Component {
	state = {
		cv: {
			"name": "",
			"jobtitle": "",
			"adress": "",
			"homtetel": "",
			"mobitel": "",
			"email": "",
			"sities": [],
			"profsum": {
				"title": "",
				"items": []
			},
			"skills": {
				"title": "",
				"items": []
			},
			"languages": {
				"title": "",
				"items": []
			},
			"workHistory": {
				"title": "",
				"items": []
			},
			"education": {
				"title": "",
				"items": []
			}
		},
		mute: "",
		tute: "Si e Tute"
	}

	componentDidMount() {
		ajax.get(`cv.php`)
			.then(res => {
				this.setState({ cv: res.data, mute: res.data.name });
			})
	}

	render() {
		return (
			<div id='home' style={maxwid}>
				<br />
				<div className="">
					<div className="w3-row-padding">

						{/* Leva kolona */}
						<div className="w3-col s4 w3-panel">

							<div className="w3-card w3-padding">
								<div className="w3-display-container ">
									<img src={jabeja} alt="Avatar" align="middle" />
									<h1>{this.state.cv.name}</h1>
									<p className='rp-link'><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Full stack developer</p>
									<p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i><a className='rp-link' href={'mailto:' + this.state.cv.email}>{this.state.cv.email}</a></p>
									{this.state.cv.sities.map((listValue, index) => {
										return (<div key={index}><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i><a className='rp-link' href={'http://' + listValue} target="_blank">{listValue}</a></div>);
									})}
									<p className='rp-link'><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>{this.state.cv.mobitel}</p>
									<hr />

									<p className="w3-xlarge w3-text-teal">
										<i className="fa fa-thumbs-up fa-fw w3-text-teal w3-margin-right"></i>
										<b>{this.state.cv.skills.title}</b>
									</p>
									<div className="sectionContent w3-margin" >
										{this.state.cv.skills.items.map((listValue, index) => {
											return (
												<div key={index}>
													{/* <p className="w3-opacity">{listValue[1]}</p> */}
													<div className="w3-light-grey w3-round-xlarge w3-margin-bottom">
														<div className="w3-container w3-round-xlarge w3-teal" style={{ width: listValue[0] + '%' }}>{listValue[1]} <p className="w3-right">{listValue[0]}%</p></div>
													</div>
												</div>
											);
										}
										)}
									</div>	
									<hr />

									<p className="w3-xlarge w3-text-teal">
										<i className="fa fa-globe fa-fw w3-text-teal w3-margin-right"></i>
										<b>{this.state.cv.languages.title}</b>
									</p>
									<div className="sectionContent w3-margin" >
										{this.state.cv.languages.items.map((listValue, index) => {
											return (
												<div key={index}>
													{/* <p className="w3-opacity">{listValue[1]}</p> */}
													<div className="w3-light-grey w3-round-xlarge w3-margin-bottom">
														<div className="w3-container w3-round-xlarge w3-teal" style={{ width: listValue[0] + '%' }}>{listValue[1]} <p className="w3-right">{listValue[0]}%</p></div>
														{/* <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ width: listValue[0] + '%' }}>{listValue[0]}%</div> */}
													</div>
												</div>
											);
										}
										)}
									</div>
									<hr />
									<p className="w3-xlarge w3-text-teal">
										<i className="fa fa-graduation-cap fa-fw w3-text-teal w3-margin-right"></i>
										<b>{this.state.cv.education.title}</b>
									</p>
									<div className="sectionContent w3-margin" >
										{this.state.cv.education.items.map((item, index) => {
											return (
												<article key={index}>
													<h2>{item.scool}</h2>
													<h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw rp-icn"></i>{item.year}</h6>
													<div className='rp-paro'>
														<p className="w3-opacity w3-margin-left">{item.degree}</p>
														<p className="w3-margin-left">{item.field}</p>
													</div>
													<br />
												</article>
											)
										}
										)}
									</div>

								</div>
								<div className="clear"></div>
							</div>

							{/* <div className="w3-white w3-text-grey w3-card w3-padding-16 w3-margin-top">
								<p className="w3-xlarge"><b><i className="fa fa-download fa-fw w3-text-teal w3-margin"></i>Download</b></p>
								<a className="w3-button w3-margin" href="http://capirp.us.to/download/ArSoft-Resume.pdf">ArSoft-Resume.pdf</a>
								<a className="w3-button w3-margin" href="http://capirp.us.to/download/ArSoft-CV.pdf">ArSoft-CV.pdf</a>
							</div>
							<div className="clear"></div> */}

						</div>
						{/* Kraj na Leva kolona */}

						{/* Desna kolona */}
						<div className="w3-col s8 w3-panel">
							<div className="w3-card">
								<h1 className="w3-text-grey w3-padding-16">
									{/* <i className="fa fa-suitcase fa-fw w3-margin w3-xxlarge w3-text-teal"></i> */}
									<img className="rp-icon w3-margin-left w3-margin-right w3-xxlarge w3-text-teal" src={worker} alt="Work" align="middle" />
									{this.state.cv.workHistory.title}
								</h1>
								<div className="sectionContent w3-margin" >
									{this.state.cv.workHistory.items.map((itemVal, index) => {
										return (
											<article key={index}>
												<h2>{itemVal.title} at {itemVal.company}</h2>
												<div className="subDetails w3-text-teal"><i className="fa fa-calendar fa-fw rp-icn"></i>{itemVal.begin} - {itemVal.end}</div>
												<div className='rp-paro'>
													{itemVal.items.map((itmv, ndx) => {
														return (<div className='w3-opacity w3-margin-left' key={ndx}>{itmv[1]}</div>)
													})
													}
												</div>
												<br />
											</article>
										)
									}
									)}
								</div>
								<div className="clear"></div>
							</div>
						</div>
					</div>

				</div>
			</div >
		)
	}

}

export default Home;
