'use client';

import Menu from './Menu';
import RoundButton from '../ui/RoundButton';
import { whatsappLink } from '@/utils/const';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';
import { useScroll } from '@lymei/hooks';
import { AiOutlineArrowDown } from 'react-icons/ai';

export default function LeftHero() {
	const scroll = useScroll();

	return (
		<div className='col-span-4 flex flex-col items-center justify-between p-4 bg-white rounded-3xl text-black z-20'>
			<div className='w-full flex justify-between'>
				<div className='flex justify-center items-center gap-2'>
					<Image src={'/images/favicon.png'} alt='SaveUp Logo' width={40} height={1} />
					<p className='text-2xl font-bold'>saveup</p>
				</div>
				<Menu />
			</div>
			<div className='w-full h-[800px] m-2 pt-48 overflow-hidden border border-black rounded-3xl shadow-inner shadow-black/50'>
				<div className='relative flex flex-col items-center gap-96' style={{ top: `-${scroll.number}px` }}>
					{scroll.number <= 500 && (
						<div
							className='fixed bottom-24 flex flex-col items-center gap-2 animate-bounce'
							style={{ opacity: `${100 - scroll.number / 5}%` }}
						>
							<span>Ver mais</span>
							<AiOutlineArrowDown />
						</div>
					)}
					<div className='relative flex flex-col gap-2 justify-evenly items-center'>
						<Image src={'/images/favicon.png'} alt='SaveUp Logo' width={170} height={1} />
						<div className='text-4xl text-center font-bold'>
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
					<div className='relative flex flex-col gap-2 justify-evenly items-center'>
						<Image src={'/images/counting-stars.svg'} alt='strs svg' width={600} height={1} />
						<h2 className='text-4xl font-bold'>Transformando visões em realidade</h2>
						<p className='text-2xl'>Nossos projetos, como constelações confiáveis</p>
					</div>
					<div className='flex flex-col w-full -mt-96'>
						<Image
							src={'/images/space-wave.svg'}
							alt='space transition'
							width={2000}
							height={1}
							className='object-contain'
						/>
						<div className='flex flex-col gap-80 justify-evenly items-center bg-[#3f3d56] text-center text-white'>
							<div className='flex flex-col gap-12'>
								<Image src={'/images/programming.svg'} alt='strs svg' width={600} height={1} />
								<div>
									<h2 className='text-4xl'>
										Colocamos você como{' '}
										<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
											protagonista
										</span>{' '}
									</h2>
									<p className='text-2xl'>
										no <span className='text-purple-500'>desenvolvimento</span> do seu{' '}
										<span className='text-blue-500'>software</span>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-12'>
								<Image src={'/images/website.svg'} alt='strs svg' width={600} height={1} />
								<div>
									<h2 className='text-4xl'>
										Seu site feito{' '}
										<span className='bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent'>
											sob medida
										</span>
									</h2>
									<p className='text-2xl'>
										refletindo sua <span className='text-purple-500'>identidade</span> e destacando sua{' '}
										<span className='text-blue-500'>presença na web</span>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-12'>
								<Image src={'/images/programming.svg'} alt='strs svg' width={600} height={1} />
								<div>
									<h2 className='text-4xl'>
										Colocamos você como{' '}
										<span className='bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent'>
											protagonista
										</span>{' '}
									</h2>
									<p className='text-2xl'>
										no <span className='text-purple-500'>desenvolvimento</span> do seu{' '}
										<span className='text-blue-500'>software</span>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-12'>
								<Image src={'/images/website.svg'} alt='strs svg' width={600} height={1} />
								<div>
									<h2 className='text-4xl'>
										Colocamos você como{' '}
										<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
											protagonista
										</span>{' '}
									</h2>
									<p className='text-2xl'>
										no <span className='text-purple-500'>desenvolvimento</span> do seu{' '}
										<span className='text-blue-500'>software</span>
									</p>
								</div>
							</div>
							<div className='flex flex-col gap-12'>
								<Image src={'/images/programming.svg'} alt='strs svg' width={600} height={1} />
								<div>
									<h2 className='text-4xl'>
										Colocamos você como{' '}
										<span className='bg-gradient-to-br from-purple-500 to-blue-500 bg-clip-text text-transparent'>
											protagonista
										</span>{' '}
									</h2>
									<p className='text-2xl'>
										no <span className='text-purple-500'>desenvolvimento</span> do seu{' '}
										<span className='text-blue-500'>software</span>
									</p>
								</div>
							</div>
						</div>
					</div>
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
