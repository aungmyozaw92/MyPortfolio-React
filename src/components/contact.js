import React, { Component } from 'react';
import {Grid, Cell ,List, ListItem, ListItemContent} from 'react-mdl';


class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
			        <Cell col={6}>
			        	<h3>Aung Myo Zaw</h3>
			        	<img 
			        	src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
			        	alt="avatar"
			        	style={{height: '250px',marginTop:'-60px'}}
			        	className="profile"
			        	/>
			        	<p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					        Mauris sagittis pellentesque lacus eleifend lacinia
					     </p>
			        </Cell>
			        <Cell col={6}>
			        	<h3>Contact Me</h3>
			        	<hr/>
			        	<div className="contact-list">
				        	<List>
							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
							     <i className="fa fa-phone-square" aria-hidden="true" />
							    	+95 9250303166
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
							     <i className="fa fa-facebook" aria-hidden="true" />
							    	MyFacebook
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
							     <i className="fa fa-envelope" aria-hidden="true" />
							    	aungmyozaw.dev@gmail.com
							    </ListItemContent>
							  </ListItem>
							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}} >
							     <i className="fa fa-skype" aria-hidden="true" />
							    	MySkype
							    </ListItemContent>
							  </ListItem>
							</List>
						</div>
			        </Cell>
			    </Grid>
			</div>
		)
	}
}

export default Contact;