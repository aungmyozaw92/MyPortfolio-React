import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={{width: '100%',margin: 'auto'}}>
				<Grid className="landing-grid">
			        <Cell col={12}>
			        	<img 
			        	src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
			        	alt="avatar"
			        	className="profile"
			        	/>
			        	<div className="banner-text">
			        		<h4>Senior Web Developer</h4>
			        		<hr/>
			        		<p>
			        		HTML/CSS | Bootstrap | Javascript | React | Vue | Angular | CI | Laravel | Ruby On Rails
			        		</p>
			        		<div className="social-links">
			        			{/*Linked In*/}
			        			<a href="https://www.linkedin.com/in/aung-myo-zaw-b852a8115/" rel="noopener noreferrer" target="_blank">
			        				<i className="fa fa-linkedin-square" aria-hidden="true" />
			        			</a>
			        			{/*Github*/}
			        			<a href="https://github.com/aungmyozaw92" rel="noopener noreferrer" target="_blank">
			        				<i className="fa fa-github" aria-hidden="true" />
			        			</a>
			        			{/*Facebook*/}
			        			<a href="https://www.facebook.com/aungmyo.zaw.1654" rel="noopener noreferrer" target="_blank">
			        				<i className="fa fa-facebook-square" aria-hidden="true" />
			        			</a>
			        			{/*Instagram*/}
			        			<a href="https://www.instagram.com/myo690/" rel="noopener noreferrer" target="_blank">
			        				<i className="fa fa-instagram" aria-hidden="true" />
			        			</a>
			        		</div>
			        	</div>
			        </Cell>
			    </Grid>
			</div>
		)
	}
}

export default Landing;