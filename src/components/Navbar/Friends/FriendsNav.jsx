import s from './FriendsNav.module.css'
import Avatar from "./Avatar";
import React from "react";

const FriendsNav = (props) =>{

	let friendsNavElements = props.friends.map((f) => {
		return <Avatar name={f.name} id={f.id}/>
	})

	return(
		<div>
			<div className={s.title}>
				Friends
			</div>
			<div className={s.friends}>
				{friendsNavElements}
			</div>
		</div>
	)
}

export default FriendsNav
