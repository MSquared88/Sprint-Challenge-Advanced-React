import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'
import picture from '../jeffrey-f-lin-r3V5-rfFErY-unsplash.jpg'


function PlayerCard(props) {
	let searchStr = props.player.name.replace(/\s+/g, '_') 
	
	return(
		<Card>
			<Image src= {picture}/>
			<Card.Content>
				<Card.Header>{props.player.name}</Card.Header>
					<Card.Meta>
						<span className='country'>Country: {props.player.country}</span>
					</Card.Meta>
			</Card.Content>
				<Card.Content extra>
					<a 
					href= {`https://en.wikipedia.org/wiki/${searchStr}`}
					style= {{fontWeight: '600'}}
					>
						wikipedia Link
					</a>
				</Card.Content>
			</Card>
	)
}

export default PlayerCard