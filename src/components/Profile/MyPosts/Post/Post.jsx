import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"/>
			{props.message} {props.name}
			<div>
				<span>{props.text} {props.count}</span>
			</div>
		</div>
	);
}

export default Post;
