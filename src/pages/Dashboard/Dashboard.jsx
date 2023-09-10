import DashboardNavigationBar from './DashboardNavigationBar/DashboardNavigationBar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Dashboard = () => {
	// ! Required variables
	const chefs = useLoaderData();

	return (
		<div className='container min-h-fit grid grid-cols-3 gap-x-6'>
			<DashboardNavigationBar chefs={chefs.data} />
			<div className='col-span-2'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
