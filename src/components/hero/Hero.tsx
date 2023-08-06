import Link from 'next/link';
import Menu from './Menu';
import RoundButton from '../ui/RoundButton';
import { BsWhatsapp } from 'react-icons/bs';
import { whatsappLink } from '@/utils/const';

export default function Hero() {
	return (
		<div className='grid grid-cols-5 h-screen p-4'>
			<div className='col-span-3 flex flex-col p-4 bg-white rounded-3xl text-black'>
				<div className='flex justify-between'>
					<p className='text-2xl font-bold'>saveup</p>
					<Menu />
				</div>
				<div className='flex flex-col gap-2 flex-1 justify-center items-center'>
					<p>!LOGO!</p>
					<div className='text-center font-bold'>
						<h1 className='text-4xl'>
							Bem-Vindo ao{' '}
							<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
								Futuro!
							</span>
						</h1>
						<h2 className='text-2xl'>Desenvolvimento Confiável</h2>
					</div>
					<RoundButton
						fill
						className='bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 transition-colors'
					>
						<Link className='flex items-center justify-center gap-2' href={whatsappLink} target='_blank'>
							WhatsApp <BsWhatsapp size={25} />
						</Link>
					</RoundButton>
				</div>
				<p>TEXT</p>
			</div>
			<div className='col-span-2'></div>
		</div>
	);
}
