import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
			<div>
				<div>
					<img
						src = 'https://traveller-eu.ru/sites/default/files/styles/index/public/tbilisi-sunset-old-town-1500x600.jpg?itok=qii469CT'/>
				</div>
				<div className={s.descriptionBlock}>
					ava + description
				</div>
			</div>
	);
}

export default ProfileInfo;
