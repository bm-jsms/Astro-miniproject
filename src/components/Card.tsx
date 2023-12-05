interface CardProps {
	title: string;
	text: string;
	link: string;
}

const Card = ({ title, text, link }: CardProps) => {
	return (
		<a
			className='block rounded-xl border-2 border-gray-800 px-8 py-4 shadow-xl transition hover:border-[#00ffffc6] hover:shadow-[#00ffff60] hover:scale-105 duration-500'
			href={link}
		>
			<h2 className='mt-2 text-xl font-bold text-white text-center'>{title}</h2>

			<p className='mt-3 text-sm text-gray-300'>{text}</p>
		</a>
	);
};

export default Card;
