import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
				    <Cell col={4}>
				    	<div style={{textAlign: 'center'}}>
				    		<img 
				        	src="https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png"
				        	alt="avatar"
				        	style={{height: '200px'}}
				        	className=""
			        		/>

			        		 <h2 style={{paddingTop: '3px'}}>Aung Myo Zaw</h2>
				            <h4 style={{color: 'grey'}}>Web Developer</h4>
				            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
				            <p>
				            	My name is Aung Myo Zaw and I am a Senior Web Application Developer and Software Developer, currently living in Yangon Myanmar.
				            	 I have a Bachelor In Software Engineering from Computer University TaungNgu and Diploma in Development from Myanmar Link and 
				            	 my primary focus and inspiration for my studies is Web Development. I am both driven and self-motivated, 
				            	 and I am constantly experimenting with new technologies and techniques. 
				            	I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
				            </p>
				            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
				            <h5>Address</h5>
				            <p>No.164, 5B, Baho Road, Kamayut Township, Yangon</p>
				            <h5>Phone</h5>
				            <p>(+95) 9250303166</p>
				            <h5>Email</h5>
				            <p>aungmyozaw.dev@gmail.com</p>
				            <h5>Web</h5>
				            <p>aungmyozaw92.github.io/</p>
				            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
				    	</div>
				    </Cell>
				    <Cell className="resume-right-col" col={8}>
				    	<h2>Education</h2>

				    	<Education
			              startYear={2008}
			              endYear={2011}
			              schoolName="Computer University TaungNgu"
			              schoolDescription="I completed Bachelor's Degree of Computer Science [B.C.Sc] from Computer University TaungNgu."
			               />
			               <Education
			                 startYear={2011}
			                 endYear={2012}
			                 schoolName="Computer University TaungNgu"
				              schoolDescription="I completed Bachelor's Degree of Computer Science [B.C.Sc(Hons)] from Computer University TaungNgu."
				              />
				            <Education
			                 startYear={2013}
			                 endYear={2013}
			                 schoolName="Diploma and Certificates In Myanmar Links"
				              schoolDescription="I certified Web Professional Advanced in Myanmar Link."
				              />
			                <hr style={{borderTop: '3px solid #e22947'}} />

			            <h2>Experience</h2>

			            <Experience
			              startYear={2012}
			              endYear={2013}
			              jobName="Service Technician"
			              jobDescription="My First Job, i worked as a service technician at F@X Computer Sales and Service . 
			              I have many experiences and and shared some awsome things what i know about computer." />
			              <Experience
			                startYear={2013}
			                endYear={2013}
			                jobName="Web Developer"
			                jobDescription="I started my developer carrier here. I worked on about porfolio website for Link2Link Technology"
			                 />
			                <Experience
			                startYear={2014}
			                endYear={2017}
			                jobName="Junior && Senior Web Developer"
			                jobDescription="I started my expertise carrier here, spent three years learning and working in various Developer aspects. I worked on about 20+ projects local and online in Ever Crystal.
			                There, i have to do many experiences, challange & demend app which was gave by iKloudit (now JLS Co Ltd)."/>
			                <Experience
			                startYear={2014}
			                endYear={2017}
			                jobName="Senior Web Developer"
			                jobDescription="I joined here, currently working on various development aspects. 
									Code2Lab Co Ltd.There, i have to do many experiences, challange & demend app which was gave by Smartsale POS System .."/>
			              <hr style={{borderTop: '3px solid #e22947'}} />

			              <h2>Skills</h2>
			              <Skills
			                skill="HTML"
			                progress={80}
			                />
			                <Skills
			                  skill="CSS"
			                  progress={80}
			                  />
			                <Skills
			                  skill="Bootstrap"
			                  progress={80}
			                  />
		                  	<Skills
		                    skill="Javascript"
		                    progress={70}
		                    />
		                    <Skills
		                      skill="Vue Js"
		                      progress={66}
		                      />
		                    <Skills
		                      skill="React"
		                      progress={40}
		                      />
		                    <Skills
		                      skill="Angular"
		                      progress={30}
		                      />
		                    <Skills
		                      skill="Node js"
		                      progress={30}
		                      />
		                    <Skills
		                      skill="PHP"
		                      progress={80}
		                      />
		                    <Skills
		                      skill="Laravel"
		                      progress={80}
		                      />
		                    <Skills
		                      skill="CodeIgniter"
		                      progress={75}
		                      />
		                    <Skills
		                      skill="Ruby On Rails"
		                      progress={70}
		                      />
		                    <Skills
		                      skill="MySql"
		                      progress={66}
		                      />
		                    <Skills
		                      skill="Postgres"
		                      progress={40}
		                      />
		                    <Skills
		                      skill="Firebase"
		                      progress={30}
		                      />
				    </Cell>
				</Grid>
			</div>
		)
	}
}

export default Resume;