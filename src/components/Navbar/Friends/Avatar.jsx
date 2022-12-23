import React from 'react';
import s from './FriendsNav.module.css'

const Avatar = (props) => {
	return (
		<div >
			<div>
				<img className={s.userAva} src="https://ss.sport-express.ru/userfiles/materials/179/1797560/volga.jpg"
					  alt="#"/>
			</div>
			<div className={s.userName}>
				{props.name}
			</div>
		</div>
	);
};

export default Avatar;
