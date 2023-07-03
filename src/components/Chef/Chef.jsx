import { useLoaderData } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { MdFastfood } from "react-icons/md";

const Chef = () => {
	const chef = useLoaderData();
	const { picture, name, bio, likes, yearsOfExperience, availableRecipes } =
		chef;
	return (
		<div>
			{/* Chef banner start */}
			<div className='p-6 bg-Primary/20 text-gray-500 font-Popins flex gap-x-5 rounded'>
				<img
					className='h-52 aspect-square rounded-full object-cover'
					src={picture}
					alt={`Chef ${name} picture`}
				/>
				<div className='h-fit my-auto text-justify'>
					<p className='mb-3 text-xl text-black font-Vollokorn font-semibold'>
						{name}
					</p>
					<p>{bio}</p>
					<div className='mt-1 text-lg flex justify-between'>
						<p className='flex items-center'>
							<span className='mr-1'>
								<FcLike />
							</span>
							: {likes}
						</p>
						<p className='flex items-center'>
							<span className='mr-1'>
								<FaBriefcase />
							</span>
							: {yearsOfExperience} years
						</p>
						<p className='flex items-center'>
							<span className='mr-1'>
								<MdFastfood />
							</span>
							: {availableRecipes.length} recipes
						</p>
					</div>
				</div>
			</div>
			{/* Chef banner end */}
		</div>
	);
};

export default Chef;