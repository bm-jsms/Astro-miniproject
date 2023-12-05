import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonSuscribe = () => {
	const [subscribe, setSubscribe] = useState(true);

	const buttonStyles = subscribe
		? 'text-slate-200 border-black bg-gradient-to-r from-indigo-900 to-indigo-500 hover:bg-green-500 hover:text-white'
		: 'text-[#ADB7BE] border-slate-200 hover:border-white bg-red-500 hover:bg-red-600 hover:text-white';

	return (
		<>
			<button
				onClick={() => {
					if (subscribe) {
						toast.success('Congratulations for subscribing', {
							theme: 'dark',
							position: 'top-center',
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
						}) && setSubscribe(!subscribe);
					} else {
						toast.error('you have canceled your participation!!', {
							theme: 'dark',
							position: 'top-center',
							autoClose: 2000,
							hideProgressBar: true,
							closeOnClick: true,
							pauseOnHover: true,
						}) && setSubscribe(!subscribe);
					}
				}}
				className={`${buttonStyles} rounded-2xl transition border-2 px-4 py-2 text-xl cursor-pointer mt-5 hover:scale-105 duration-300 ease-in-out`}
			>
				{subscribe ? 'Subscribee' : 'Unsubscribe'}
			</button>
			<ToastContainer />
		</>
	);
};

export default ButtonSuscribe;
