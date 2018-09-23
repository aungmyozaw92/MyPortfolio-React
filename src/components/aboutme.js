import React, { Component } from 'react';
import {Grid, Cell ,} from 'react-mdl';

class About extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
			        <Cell col={12}>
			        	<h2 className="section-heading">
                            About Me
                        </h2>
			        	<img 
			        	src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
			        	alt="avatar"
			        	style={{height: '250px',marginTop:'-60px'}}
			        	className="profile"
			        	/>
			        	<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            My name is Aung Myo Zaw and I am a Senior Web Application Developer and Software Developer, currently living in Yangon Myanmar. 
                            I have a Bachelor In Software Engineering from Computer University TaungNgu and Diploma in Development from Myanmar Link and
                             my primary focus and inspiration for my studies is Web Development. I am both driven and self-motivated, 
                             and I am constantly experimenting with new technologies and techniques. 
                            I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                        </p>
			        	
			        </Cell>
			        
			    </Grid>
			</div>
		)
	}
}

export default About;