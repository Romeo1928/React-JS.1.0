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

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
}

const Dialogs = (props) => {

	let dialogs = [
		{id: 1, name: 'Romeo'},
		{id: 2, name: 'Nadin'},
		{id: 3, name: 'Tiko'},
		{id: 4, name: 'Sancho'},
	]

	let messages = [
		{id: 1, message: 'Hello'},
		{id: 2, message: 'How are yoy?'},
		{id: 3, message: 'Hi'},
		{id: 4, message: 'Hi'},
	]

	let dialogsElements = dialogs.map ((d) => {
		return <DialogItem name={d.name} id={d.id}/>
	})
	// let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/> )

	let messagesElements = messages.map((m) => {
		return <Message message={m.message} id={m.id}/>
	})
	// let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/> )

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
				{/*<DialogItem name={dialogs[0].name} id={dialogs[0].id}/>*/}
				{/*<DialogItem name={dialogs[1].name} id={dialogs[1].id}/>*/}
				{/*<DialogItem name={dialogs[2].name} id={dialogs[2].id}/>*/}
				{/*<DialogItem name={dialogs[3].name} id={dialogs[3].id}/>*/}
			</div>
			<div className={s.messages}>
				{messagesElements}
				{/*<Message message={messages[0].message} id={messages[0].id}/>*/}
				{/*<Message message={messages[1].message} id={messages[1].id}/>*/}
				{/*<Message message={messages[2].message} id={messages[2].id}/>*/}
				{/*<Message message={messages[3].message} id={messages[3].id}/>*/}
			</div>
		</div>
	)
}
export default Dialogs



