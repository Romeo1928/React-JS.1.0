import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img
					src="https://media.istockphoto.com/id/1093490210/photo/aerial-view-of-nemiga-minsk-belarus.jpg?s=612x612&w=0&k=20&c=nPm03tiNqOixfWt34VpZJVauFTAZ2O30H3KaWwdj4W4="/>
			</div>
			<div>
				ava + description
			</div>
			<div>
				My posts
				<div>
					New post
				</div>
				<div className={s.posts}>
					<div className={s.item}>post 1</div>
					<div className={s.item}>post 2</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
