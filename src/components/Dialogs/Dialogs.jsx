import s from './Dialogs.module.css'

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<div className={s.dialog + ' ' + s.active}>Romeo</div>
				{/*<div className={`${s.dialog} ${s.active}`}>Romeo</div>*/}
				<div className={s.dialog}>Nadin</div>
				<div className={s.dialog}>Tiko</div>
				<div className={s.dialog}>Sancho</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}> "Hello"</div>
				<div className={s.message}> "How are yoy?"</div>
				<div className={s.message}> "Hi"</div>
			</div>
		</div>
	)
}

export default Dialogs
