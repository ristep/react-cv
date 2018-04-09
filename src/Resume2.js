import React from 'react'
import { ajax } from './AjaxAxios';
import './styles/css/Resume2.css';
import jabeja from './assets/poMladCB.png';

class Resume2 extends React.Component {
	state = {
		jsn: {
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
		}
	}

	componentDidMount() {
		ajax.get(`cv.php`)
			.then(res => {
				this.setState({ jsn: res.data });
			})
	}

	render() {
		return (
			<div id="rez2">
				<div id="cv" className="instaFade">
					<div className="mainDetails">
						<div id="headshot" className="quickFade">
							<img src={jabeja} alt="Slikce" /> 
						</div>

						<div id="name">
							<h1 className="quickFade delayTwo">{this.state.jsn.name}</h1>
							<h2 className="quickFade delayThree">{this.state.jsn.jobtitle}</h2>
						</div>

						<div id="contactDetails" className="quickFade delayOne">
							<ul>
								<li>e: <a href={'mailto:' + this.state.jsn.email}>{this.state.jsn.email}</a></li>
								{this.state.jsn.sities.map(function (listValue, index) {
									return <li key={index}>w: <a href={'http://' + listValue} target="_blank">{listValue}</a></li>;
								})}
								<li>m:&nbsp;{this.state.jsn.mobitel}</li>
							</ul>
						</div>
						<div className="clear"></div>
					</div>

					<div id="mainArea" className="quickFade delayFive">

						<section>
							<article>
								<div className="sectionTitle">
									{/* <h1>{ this.state.jsn.profsum.title }</h1>  */}
									<h1>Profile</h1>
								</div>
								<div className="sectionContent">
									{this.state.jsn.profsum.items.map((listValue, index) => {
											return <article key={index}><div>{listValue[1]}</div></article>
									})
									}
									<br />
								</div>
							</article>
							<div className="clear"></div>
						</section>

						<section>
							<div className="sectionTitle">
								<h1>{this.state.jsn.skills.title}</h1>
							</div>
							<div className="sectionContent">
								<ul className="keySkills">
									{this.state.jsn.skills.items.map((itemVal, index) => {
										return (
											<li key={index}>
													<div className="mspace" style={{ width: '100%' }}>
														<div className="level" style={{ width: itemVal[0] + '%' }}></div>
													</div>
													<div className='cuci'>{itemVal[1]}</div>
											</li>
										);
									})
									}
								</ul>
							</div>
							<div className="clear"></div>
						</section>

						<section>
							<div className="sectionTitle">
								<h1>{this.state.jsn.languages.title}</h1>
							</div>
							<div className="sectionContent">
								<ul className="keySkills">
									{this.state.jsn.languages.items.map((itemVal, index) => {
										return (
											<li key={index}>
												<div>
													<div className="mspace" style={{ width: '100%' }}>
														<div className="level" style={{ width: itemVal[0] + '%' }}></div>
													</div>
													<div className='cuci'>{itemVal[1]}</div>
												</div>
											</li>
										);
									})
									}
								</ul>
							</div>
							<div className="clear"></div>
						</section>

						<section>
							<div className="sectionTitle">
								<h1>{this.state.jsn.workHistory.title}</h1>
							</div>
							<div className="sectionContent" >
								{this.state.jsn.workHistory.items.map((itemVal, index) => {
										return (
											<article key={index}>
												<h2>{itemVal.title} at {itemVal.company}</h2>
												<div className="subDetails">{itemVal.begin} - {itemVal.end}</div>
												{itemVal.items.map((itmv, ndx) => {
													if (itmv[0] > 5)
														return (<div key={ndx}>{itmv[1]}</div>)
													return null;
												})
												}
												<br />
											</article>
										);
								}
								)}
							</div>
							<div className="clear"></div>
						</section>

						<section>
							<div className="sectionTitle">
								<h1>{this.state.jsn.education.title}</h1>
							</div>
							<div className="sectionContent">
								{this.state.jsn.education.items.map((itemVal, index) => {
									return (
										<article key={index}>
											<h2>{itemVal.scool}</h2>
											<h4 className="subDetails">{itemVal.year}, {itemVal.degree}</h4>
											<p>{itemVal.field}</p>
										</article>
									)
								})}
							</div>
							<div className="clear"></div>
						</section>

					</div>
				</div>
			</div>
		)
	};
};

export default Resume2;
