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
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name="Romeo" id="1"/>
				<DialogItem name="Nadin" id="2"/>
				<DialogItem name="Tiko" id="3"/>
				<DialogItem name="Sancho" id="4"/>
			</div>
			<div className={s.messages}>
				<Message message="Hello"/>
				<Message message="How are yoy?"/>
				<Message message="Hi"/>
				<Message message="Hi"/>
			</div>
		</div>
	)
}
export default Dialogs
