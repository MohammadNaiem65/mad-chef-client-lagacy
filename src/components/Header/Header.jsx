import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [navOptionsStatus, setNavOptionsStatus] = useState(false);
	console.log(navOptionsStatus);
	return (
		<div className='md:container px-0'>
			<div className='flex justify-between items-center px-12 relative'>
				<img src={logo} alt='Mad Chef logo' className='w-32 md:w-48' />
				<p className='text-xl block md:hidden absolute right-14 duration-300 cursor-pointer'>
					{navOptionsStatus ? (
						<FaTimes onClick={() => setNavOptionsStatus(!navOptionsStatus)} />
					) : (
						<FaBars onClick={() => setNavOptionsStatus(!navOptionsStatus)} />
					)}
				</p>
				<div
					className={`${
						navOptionsStatus ? "top-24 bg-Secondary p-3 rounded" : "-top-28"
					} font-semibold text-lg md:bg-transparent absolute right-14 md:static flex flex-col md:flex-row gap-x-6  transform md:translate-y-0 duration-300 ease-out`}>
					<Link className='link-hover'>Home</Link>
					<Link className='link-hover'>Favorite</Link>
					<Link className='link-hover'>Blog</Link>
					<p>
						<Link className='link-hover'>Login</Link>/{""}
						<Link className='link-hover'>Sign In</Link>
					</p>
				</div>
			</div>
			<div className='h-[2px] bg-gray-300'></div>
		</div>
	);
};

export default Header;
