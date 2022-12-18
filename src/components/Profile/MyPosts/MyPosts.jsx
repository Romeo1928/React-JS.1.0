import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

	let posts = [
		{id: 1, message: 'Hi, how are you?', likesCount: 15},
		{id: 2, message: 'It\'s my first post', likesCount: 10},
	]

	let postsElements = posts.map((m) => {
		return <Post message={m.message} likesCount={m.likesCount} id={m.id}/>
	})

	return (
		<div className={s.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.posts}>
				{postsElements}
				{/*<Post message={posts[0].message} likesCount={posts[0].likesCount} id={posts[0].id}/>*/}
				{/*<Post message={posts[1].message} likesCount={posts[1].likesCount} id={posts[1].id}/>*/}
			</div>
		</div>
	);
}
export default MyPosts;
