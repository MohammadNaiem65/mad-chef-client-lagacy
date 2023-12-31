import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../../assets/logo.png';
import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import HeaderActiveLink from '../HeaderActiveLink/HeaderActiveLink';
import { AuthContext } from '../../../providers/authProvider/authProvider';

const Header = () => {
	// ! Required variables
	const { user, logOutUser } = useContext(AuthContext);
	const [navOptionsStatus, setNavOptionsStatus] = useState(false);

	const containerVariant = {
		initial: {
			scaleY: 0,
			transition: {
				delayChildren: 0.5,
			},
		},
		final: {
			scaleY: 1,
			transition: {
				duration: 0.4,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.36, 1],
				delay: 0.3,
			},
		},
	};

	const linkContainerVariant = {
		initial: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: -1,
			},
		},
		final: {
			transition: {
				staggerChildren: 0.09,
				staggerDirection: 1,
			},
		},
	};

	// ! Log out user
	const handleLogOutUser = () => {
		logOutUser();
	};

	return (
		<>
			<div className='flex justify-between items-center px-12 relative'>
				<Link to='/'>
					<img
						src={logo}
						alt='Mad Chef logo'
						className='w-32 md:w-48 relative z-[100]'
					/>
				</Link>

				{/* Hamburger menu */}
				<p className='text-xl block md:hidden absolute right-14 duration-300 cursor-pointer z-[100]'>
					{navOptionsStatus ? (
						<FaTimes
							onClick={() =>
								setNavOptionsStatus(!navOptionsStatus)
							}
						/>
					) : (
						<FaBars
							onClick={() =>
								setNavOptionsStatus(!navOptionsStatus)
							}
						/>
					)}
				</p>

				{/* Large device navbar */}
				<div
					className={`hidden font-semibold font-Vollokorn text-lg md:flex items-center gap-x-6`}>
					<HeaderActiveLink to='/'>Home</HeaderActiveLink>
					<HeaderActiveLink to='/dashboard'>
						Dashboard
					</HeaderActiveLink>
					<HeaderActiveLink to='/user-dashboard'>
						User Dashboard
					</HeaderActiveLink>
					<HeaderActiveLink to='/consult'>Consult</HeaderActiveLink>
					<HeaderActiveLink to='/blog'>Blog</HeaderActiveLink>
					{user ? (
						<button
							className='btn btn-primary'
							onClick={handleLogOutUser}>
							Sign Out
						</button>
					) : (
						<p className='flex'>
							<HeaderActiveLink to='login' className='link-hover'>
								Login
							</HeaderActiveLink>
							/
							<HeaderActiveLink
								to='/sign-up'
								className='link-hover'>
								Sign In
							</HeaderActiveLink>
						</p>
					)}
				</div>

				{/* Small device navbar */}
				<AnimatePresence>
					{navOptionsStatus && (
						<motion.div
							className={`w-screen h-screen bg-Secondary absolute top-0 left-0 font-semibold font-Vollokorn text-4xl md:hidden flex flex-col justify-center items-center origin-top z-[90]`}
							variants={containerVariant}
							initial='initial'
							animate='final'
							exit='exit'>
							<motion.div
								variants={linkContainerVariant}
								initial='initial'
								animate='final'
								exit='initial'>
								<p className='overflow-hidden mt-16'>
									<HeaderActiveLink to='/'>
										Home
									</HeaderActiveLink>
								</p>
								<p className='overflow-hidden mt-3'>
									<HeaderActiveLink to='/dashboard'>
										Dashboard
									</HeaderActiveLink>
								</p>
								<p className='overflow-hidden mt-3'>
									<HeaderActiveLink to='/user-dashboard'>
										User Dashboard
									</HeaderActiveLink>
								</p>
								<p className='overflow-hidden mt-3'>
									<HeaderActiveLink to='/consult'>
										Consult
									</HeaderActiveLink>
								</p>
								<p className='overflow-hidden mt-3'>
									<HeaderActiveLink to='/blog'>
										Blog
									</HeaderActiveLink>
								</p>
								{user ? (
									<button
										className='btn btn-primary'
										onClick={handleLogOutUser}>
										Sign Out
									</button>
								) : (
									<>
										<p className='overflow-hidden mt-3'>
											<HeaderActiveLink
												to='login'
												className='link-hover'>
												Login
											</HeaderActiveLink>
										</p>
										<p className='overflow-hidden mt-3'>
											<HeaderActiveLink
												to='/sign-up'
												className='link-hover'>
												Sign In
											</HeaderActiveLink>
										</p>
									</>
								)}
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
			<div className='h-[2px] bg-gray-300 relative z-[100]'></div>
		</>
	);
};

export default Header;
