import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"/>
			{props.message}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>
	);
}

export default Post;
