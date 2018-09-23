import React, { Component } from 'react';
import { Tabs,Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component {

	constructor(props) {
		super(props);
		this.state = { activeTab:0 };
	}

	toggleCategories() {
		if (this.state.activeTab === 0) {
			return(
				<div className="porjects-grid">
					{/*Project*/}
					<Card shadow={0} style={{width: '33%', margin: 'auto'}}>
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Laravel #1</CardTitle>
					    <CardText>
					        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					        Mauris sagittis pellentesque lacus eleifend lacinia...
					    </CardText>
					    <CardActions border>
					        <Button colored>Github</Button>
					        <Button colored>DEMO</Button>
					    </CardActions>
					    <CardMenu style={{color: '#fff'}}>
					        <IconButton name="share" />
					    </CardMenu>
					</Card>
					{/*Project*/}
					<Card shadow={0} style={{width: '33%', margin: 'auto'}}>
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Laravel #1</CardTitle>
					    <CardText>
					        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					        Mauris sagittis pellentesque lacus eleifend lacinia...
					    </CardText>
					    <CardActions border>
					        <Button colored>Github</Button>
					        <Button colored>DEMO</Button>
					    </CardActions>
					    <CardMenu style={{color: '#fff'}}>
					        <IconButton name="share" />
					    </CardMenu>
					</Card>
					{/*Project*/}
					<Card shadow={0} style={{width: '33%', margin: 'auto'}}>
					    <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}}>Laravel #1</CardTitle>
					    <CardText>
					        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					        Mauris sagittis pellentesque lacus eleifend lacinia...
					    </CardText>
					    <CardActions border>
					        <Button colored>Github</Button>
					        <Button colored>DEMO</Button>
					    </CardActions>
					    <CardMenu style={{color: '#fff'}}>
					        <IconButton name="share" />
					    </CardMenu>
					</Card>
				</div>
			)
		}else if (this.state.activeTab === 1) {
			return(
				<div><h1> This Is Vue </h1></div>
			)
		}else if (this.state.activeTab === 2) {
			return(
				<div><h1> This Is React </h1></div>
			)
		}else if (this.state.activeTab === 3) {
			return(
				<div><h1> This Is Angular </h1></div>
			)
		}
	}

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
					<Tab>Laravel</Tab>
					<Tab>Vue Js</Tab>
					<Tab>React Js</Tab>
					<Tab>Angular Js</Tab>
				</Tabs> 
					<Grid>
			        	<Cell col={12}>
			        		<div className="content">{this.toggleCategories()}</div>
						</Cell>
			    	</Grid>
			</div>
		)
	}
}

export default Projects;