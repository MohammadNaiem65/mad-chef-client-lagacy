import { motion } from 'framer-motion';
import notify from '../../../customHooks/notify';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';

export default function Consult({ consult }) {
	// ! Required variables
	const { _id, date, time } = consult;

	// * Handle consult deletion
	const handleDeleteConsult = () => {
		axiosCustomInstance.delete(`/consult?id=${_id}`).then((res) => {
			if (res.data.deletedCount) {
				notify('success', 'Successfully removed the consult request.');
			} else {
				notify('error', 'Something went wrong!');
			}
		});
	};

	return (
		<div className='w-fit mx-auto cursor-pointer'>
			<motion.div
				whileHover='hover'
				transition={{
					duration: 1,
					ease: 'backInOut',
				}}
				variants={{
					hover: {
						scale: 1.05,
					},
				}}
				className='relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-Primary p-8'>
				<div className='relative z-10 text-white'>
					<span className='mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white'>
						Consult
					</span>
					<motion.span
						initial={{ scale: 0.85 }}
						variants={{
							hover: {
								scale: 1,
							},
						}}
						transition={{
							duration: 1,
							ease: 'backInOut',
						}}
						className='mt-12 mb-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]'>
						{time}
						<br />
						PM
					</motion.span>
					<p className='text-xl'>Date: {date}</p>
				</div>
				<button
					className='absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white'
					onClick={handleDeleteConsult}>
					Delete
				</button>
				<motion.svg
					width='320'
					height='384'
					viewBox='0 0 320 384'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='absolute inset-0 z-0'
					variants={{
						hover: {
							scale: 1.5,
						},
					}}
					transition={{
						duration: 1,
						ease: 'backInOut',
					}}>
					<motion.circle
						variants={{
							hover: {
								scaleY: 0.5,
								y: -25,
							},
						}}
						transition={{
							duration: 1,
							ease: 'backInOut',
							delay: 0.2,
						}}
						cx='160.5'
						cy='114.5'
						r='101.5'
						fill='#262626'
					/>
					<motion.ellipse
						variants={{
							hover: {
								scaleY: 2.25,
								y: -25,
							},
						}}
						transition={{
							duration: 1,
							ease: 'backInOut',
							delay: 0.2,
						}}
						cx='160.5'
						cy='265.5'
						rx='101.5'
						ry='43.5'
						fill='#262626'
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
}
