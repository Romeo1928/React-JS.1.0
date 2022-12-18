import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id
	return (
		<div className={s.dialog + ' ' + s.active}>
			{/*<div className={`${s.dialog} ${s.active}`}>*/}
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Dialogs = (props) => {

	let dialogsData = [
		{id: 1, name: 'Romeo'},
		{id: 2, name: 'Nadin'},
		{id: 3, name: 'Tiko'},
		{id: 4, name: 'Sancho'},
	]

	let messagesData = [
		{id: 1, message: 'Hello'},
		{id: 2, message: 'How are yoy?'},
		{id: 3, message: 'Hi'},
		{id: 4, message: 'Hi'},
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
				<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
				<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
				<DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
			</div>
			<div className={s.messages}>
				<Message message={messagesData[0].message} id={messagesData[0].id}/>
				<Message message={messagesData[1].message} id={messagesData[1].id}/>
				<Message message={messagesData[2].message} id={messagesData[2].id}/>
				<Message message={messagesData[3].message} id={messagesData[3].id}/>
			</div>
		</div>
	)
}
export default Dialogs

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

