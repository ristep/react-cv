import React from 'react'
// import VueMarkdown from 'vue-markdown';
import { ajax } from './AjaxAxios';
import './styles/css/About.css';
// import ReactJson from 'react-json-view';

class About extends React.Component {

	state = {
		jsn: {},
		readme_md: "...Loading...",
		loading: false
	}

	// componentDidMount() {
	// 	ajax.get(`cv.php`)
	// 		.then(res => {
	// 			this.setState({ readme_md: res.data });
	// 		})
	// }

	// components: {VueMarkdown: VueMarkdown},
	async componentDidMount() {
    this.setState({ loading: true });
    try {
			this.setState( { readme_md: (await ajax.get('react-cv.readme.php')).data });
			// console.log();
    } catch (e) {
      console.log(e);
      this.errors.push(e);
    }
    this.setState({ loading: false });
   }

render() {
	return (
		<div id='about'>
			<div className="carton">
				<h4>README.md from GitHub repository <a href="https://github.com/ristep/vue-cv">ristep/react-cv</a></h4>
			</div>
			<div className="carton" >
				<div dangerouslySetInnerHTML={{__html: this.state.readme_md}}></div>
			</div>
		</div>
	);
	}

}

export default About;