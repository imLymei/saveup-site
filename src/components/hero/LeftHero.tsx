'use client';

import Menu from './Menu';
import RoundButton from '../ui/RoundButton';
import { whatsappLink } from '@/utils/const';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { useScroll } from '@lymei/hooks';

export default function LeftHero() {
	const scroll = useScroll();

	return (
		<div className='col-span-4 flex flex-col items-center p-4 bg-white rounded-3xl text-black z-20'>
			<div className='w-full flex justify-between'>
				<div className='flex justify-center items-center gap-2'>
					<Image src={'/images/favicon.png'} alt='SaveUp Logo' width={40} height={1} />
					<p className='text-2xl font-bold'>saveup</p>
				</div>
				<Menu />
			</div>
			<div className='flex-1 overflow-hidden'>
				<div
					className='relative flex flex-col gap-2 justify-evenly py-36 items-center'
					style={{ top: `-${scroll.number}px` }}
				>
					<Image src={'/images/favicon.png'} alt='SaveUp Logo' width={170} height={1} />
					<div className='text-4xl text-center tracking-widest font-bold'>
						<h1>
							Bem-Vindo ao{' '}
							<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
								Futuro
							</span>{' '}
							Com
						</h1>
						<h2>
							<span className='text-purple-500'>Desenvolvimento</span>{' '}
							<span className='text-blue-500'>Confiável</span>
						</h2>
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
			</div>
			<div className='relative flex flex-col justify-center w-fit'>
				<p className='text-center text-xl'>
					&quot;Transformando <span className='text-purple-500'>Ideias</span> em{' '}
					<span className='text-blue-500'>Realidade Digital</span>.&quot;
				</p>
				<p className='text-right text-neutral-500 translate-x-12'>~ Grecco Pavan</p>
			</div>
		</div>
	);
}
