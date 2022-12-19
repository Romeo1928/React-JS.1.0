import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


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
			</div>
			<div className={s.messages}>
				{messagesElements}
			</div>
		</div>
	)
}
export default Dialogs



