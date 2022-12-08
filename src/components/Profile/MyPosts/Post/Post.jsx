import s from './Post.module.css';

const Post = () => {
	return (
		<div className={s.item}>
			<img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg"/>
				post 1
			<div>
				<span>like</span>
			</div>
		</div>
	);
}

export default Post;
