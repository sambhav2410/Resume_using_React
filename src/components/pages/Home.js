import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/pages/profile/Profile';
import About from '../../components/pages/about/About';
import Skills from '../../components/pages/skills/Skills';
import Experience from '../../components/pages/experience/Experience';
import Project from '../../components/pages/project/Project';
import Education from '../../components/pages/education/Education';

export default class Home extends Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3 l3'>
							<Profile />
						</div>
						<div className='col s12 m9 l9'>
							<About />
							<Skills />
							<Experience />
							<Project />
							<Education />

						</div>
					</div>
				</div>
			</section>
		);
	}
}
