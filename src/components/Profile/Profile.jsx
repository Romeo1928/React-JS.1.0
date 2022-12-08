import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
	return (
			<div className = {s.content}>
				<div>
					<img src = 'https://traveller-eu.ru/sites/default/files/styles/index/public/tbilisi-sunset-old-town-1500x600.jpg?itok=qii469CT'/>
				</div>
				<div>
					ava + description
				</div>
				<MyPosts/>
			</div>
	);
}

export default Profile;
