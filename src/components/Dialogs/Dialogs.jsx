import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to="/dialogs/1">Romeo</NavLink>
				</div>
				{/*<div className={`${s.dialog} ${s.active}`}>Romeo</div>*/}
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Nadin</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Tiko</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Sancho</NavLink>
				</div>
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
