import React, { Component } from 'react';
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-5'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
								Resume
							</Link>
							<Link to='/' data-target='side-nav' className='sidenav-trigger'>
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
										<i class='fas fa-home'></i> <b>Home</b>
									</Link>
								</li>
								<li>
									<Link to='/skills'>
										<i class='fas fa-copy'></i> <b>Skills</b>
									</Link>
								</li>
								<li>
									<Link to='/experience'>
										<i class='fas fa-id-badge'></i> <b>Experience</b>
									</Link>
								</li>
								<li>
									<Link to='/project'>
										<i class='fas fa-address-card'></i> <b>Project</b>
									</Link>
								</li>
								<li>
									<Link to='/education'>
										<i class='fas fa-graduation-cap'></i> <b>Education</b>
									</Link>
								</li>
								
							</ul>
						</div>
					</div>
				</nav>
				<ul className='sidenav' id='side-nav'>
					<li>
						<Link to='/'>
							<i class='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<i class='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/experience'>
							<i class='fas fa-id-badge'></i> Experience
						</Link>
					</li>
					<li>
						<Link to='/education'>
							<i class='fas fa-graduation-cap'></i>Education
						</Link>
					</li>
					<li>
						<Link to='/project'>
							<i class='fas fa-address-card'></i> Project
						</Link>
					</li>
				</ul>
			</>
		);
	}
}
