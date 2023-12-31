import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './InvertedCard.css';

const InvertedCard = ({ chef }) => {
	const { picture, name, yearsOfExperience, availableRecipes, rating, _id } =
		chef;
	return (
		<div className='h-full font-semibold bg-[#495579] flex flex-col justify-between rounded overflow-hidden'>
			{/* Card upper half */}
			<div className='h-60 w-full div-secret relative secret-after'>
				<img
					src={picture && picture}
					alt={`image of chef ${name}`}
					className='h-full w-full object-cover object-center rounded-br'
				/>
			</div>
			<div className='h-28 w-full px-5 md:px-2 py-2 bg-white text-slate-500 relative leading-[1.3rem] rounded-tr'>
				<div className='w-[7.25rem] h-12 bg-white grid place-items-center border-[#495579] border-t-[10px] border-r-[10px] absolute left-0 -top-12 rounded-tr secret-before before:top-0 before:left-0 before:shadow-span-shadow-left secret-after after:top-0 after:right-0 after:shadow-span-shadow-right'>
					<p className='px-1 py-[0.375rem] bg-Primary text-yellow-300 flex items-center gap-[2px] rounded p-secret'>
						{Array.from({ length: 5 }, (_, i) => {
							if (rating > i + 1) {
								return <FaStar key={i} />;
							} else if (rating >= i + 0.5) {
								return <FaStarHalfAlt key={i} />;
							} else {
								return <FaRegStar key={i} />;
							}
						})}
					</p>
				</div>

				<h3 className='text-lg text-black mt-2'>{name}</h3>
				<p>Experience: {yearsOfExperience} Years</p>
				<div className='flex justify-between items-center '>
					<p>Recipes: {availableRecipes.length}</p>
					<Link
						to={`https://assignment-10-phr.netlify.app/dashboard/chefs/chef/${_id}`}
						className='arrows flex justify-center items-center w-12 h-6'>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45 hover'></span>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InvertedCard;
