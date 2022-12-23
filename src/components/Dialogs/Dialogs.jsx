import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

	let dialogsElements = props.state.dialogs.map((d) => {
		return <DialogItem name={d.name} id={d.id}/>
	})
// let dialogsElements = props.dialogs.map ( d => <DialogItem name={d.name} id={d.id}/> )


	let messagesElements = props.state.messages.map((m) => {
		return <Message message={m.message} id={m.id}/>
	})
// let messagesElements = props.messages.map( m => <Message message={m.message} id={m.id}/> )

	let newMessageElement = React.createRef();
	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogsElements}
			</div>
			<div className={s.messages}>
				{messagesElements}
				<div className={s.text}>
					<textarea ref={newMessageElement}></textarea>
					<div>
						<button onClick={addMessage}>Add message</button>
					</div>
				</div>
			</div>

		</div>
	)
}
export default Dialogs



