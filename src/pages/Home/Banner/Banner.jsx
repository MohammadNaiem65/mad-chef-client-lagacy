import chef from '../../../assets/person.png';
import pan from '../../../assets/pan.png';
import spoon from '../../../assets/spoon.png';
import knife from '../../../assets/knife.png';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className='container h-96 gradient-bg flex justify-center md:justify-evenly rounded shadow-lg overflow-hidden relative'>
			{/* Left Side blobs */}
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 -left-32 rotate-45'></div>
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-28 -left-32 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-12 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-10 rotate-45'></div>

			{/* Left Container */}
			<div className=' w-1/2 relative flex justify-center items-center'>
				{/* Center blobs */}
				<div className='h-64 hidden md:block aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 left-1/2 rotate-45'></div>
				<div className='h-64 hidden md:block aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 left-1/2 rotate-[35deg]'></div>
				<div className='w-1/2'>
					<h2 className='text-3xl font-semibold font-Popins relative z-50 '>
						Mad Chef
					</h2>
					<p className='font-Popins'>
						Discover Delicious and Healthy Dishes to Delight and
						Satisfy Your Family's Plates"
					</p>
					<Link
						to='/dashboard'
						className='btn btn-primary inline-block mt-4'>
						Explore
					</Link>
				</div>
			</div>

			{/* Right Container */}
			<div className='w-1/2 hidden md:flex justify-center items-center relative'>
				{/* Right side blobs */}
				<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-60 md:bg-opacity-10 absolute right-0 md:right-80 -bottom-10 rotate-45'></div>
				<div className='h-20 aspect-square shape-bg-two bg-Primary bg-opacity-20 absolute -right-10 -top-3 rotate-45'></div>

				{/* Chef background blobs */}
				<svg
					width='352'
					height='352'
					viewBox='0 0 352 352'
					xmlns='http://www.w3.org/2000/svg'>
					<path fill='#8FB4FF'>
						<animate
							attributeName='d'
							dur='50s'
							repeatCount='indefinite'
							values='M306.601 305.947C329.757 281.813 352.543 232.099 351.99 190.186C351.437 148.273 330 86.1245 303.284 54.4708C276.567 22.8171 227.286 -2.90063 191.691 0.263955C156.095 3.42854 119.629 54.2644 89.7123 73.4583C59.7953 92.6523 25.7728 88.9893 12.1888 115.428C-1.39529 141.866 -4.88629 193.757 8.20803 232.088C21.3023 270.419 56.6142 328.261 90.7547 345.411C124.895 362.561 177.077 341.568 213.051 334.99C249.025 328.413 283.444 330.081 306.601 305.947Z;
							
							M257.611 289.258C283.595 258.957 342.342 207.324 350.545 166.186C358.747 125.048 330.664 66.6413 306.824 42.4296C282.985 18.2179 241.811 27.1474 207.507 20.9161C173.202 14.6849 132.823 -10.6352 100.998 5.04215C69.1719 20.7195 31.9883 77.9908 16.553 114.98C1.11769 151.97 -7.31566 190.56 8.38566 226.979C24.087 263.398 79.7193 313.324 110.761 333.493C141.803 353.663 170.16 355.369 194.635 347.997C219.11 340.624 231.626 319.56 257.611 289.258Z;

							M289.628 275.747C313.055 247.532 346.164 215.982 351.032 182.422C355.901 148.863 341.973 104.781 318.838 74.3879C295.704 43.9944 248.979 1.98947 212.225 0.0615657C175.471 -1.86633 133.353 41.9735 98.3141 62.8205C63.2756 83.6676 12.236 100.281 1.99476 125.144C-8.24652 150.007 23.6229 183.128 36.8664 211.997C50.1099 240.867 52.5224 275.076 81.4557 298.361C110.389 321.647 175.771 355.479 210.466 351.71C245.161 347.941 266.2 303.962 289.628 275.747Z;
							
							M287.043 310.751C313.502 286.298 341.57 249.771 350.833 205.281C360.095 160.792 311.953 114.109 287.043 80.1101C262.132 46.1117 242.461 7.97701 201.37 1.29105C160.28 -5.39491 98.3201 14.9119 71.394 38.5796C44.468 62.2473 40.6161 106.154 27.385 148.16C14.1538 190.165 -4.9107 244.763 1.16211 278.5C7.23491 312.236 60.8824 316.812 94.2275 327.043C127.573 337.275 161.06 352.014 192.078 352C223.096 351.986 260.584 335.204 287.043 310.751Z;
							
							M271.77 266C296.702 237.206 348.742 208.353 351.616 175.417C356.888 115 306.758 76.2951 271.77 66C245.005 38.3207 222.511 24.5425 191.026 9.34064C159.541 -5.86125 95.6929 -1.28909 69.4873 14.2867C43.2817 29.8624 44.782 68.5652 33.7924 102.795C22.8029 137.025 -10.9195 180.968 3.55005 219.666C18.0196 258.364 87.5304 313.564 120.609 334.983C153.689 356.402 181.934 353.493 202.024 348.182C222.115 342.871 246.838 294.794 271.77 266Z;

							M306.601 305.947C329.757 281.813 352.543 232.099 351.99 190.186C351.437 148.273 330 86.1245 303.284 54.4708C276.567 22.8171 227.286 -2.90063 191.691 0.263955C156.095 3.42854 119.629 54.2644 89.7123 73.4583C59.7953 92.6523 25.7728 88.9893 12.1888 115.428C-1.39529 141.866 -4.88629 193.757 8.20803 232.088C21.3023 270.419 56.6142 328.261 90.7547 345.411C124.895 362.561 177.077 341.568 213.051 334.99C249.025 328.413 283.444 330.081 306.601 305.947Z
							'
						/>
					</path>
				</svg>

				{/* Chef image and components */}
				<img
					src={chef}
					alt='banner image'
					className='w-48 absolute top-1/2 left-56 animate-float-chef'
				/>
				<img
					src={knife}
					alt='banner image'
					className='w-14 absolute top-[36%] left-[59%] transform animate-float-knife'
				/>
				<img
					src={pan}
					alt='banner image'
					className='w-16 absolute top-[60%] left-[28%] animate-float-pan'
				/>
				<img
					src={spoon}
					alt='banner image'
					className='w-44 absolute top-[60%] left-[40%] animate-float-spoon'
				/>
			</div>
		</div>
	);
};

export default Banner;
