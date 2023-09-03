import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';

const UserDashboard = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);
	return (
		<div className='min-h-[calc(100vh-26.95rem)]'>
			<h1 className='text-center'>{user?.name}</h1>
			<br />
		</div>
	);
};

export default UserDashboard;
