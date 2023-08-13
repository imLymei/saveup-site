import Link from 'next/link';
import { AiOutlineTwitter, AiOutlineGithub, AiFillInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { servicesData } from '@/utils/const';

export default function RightHero() {
	return (
		<div className='max-md:hidden col-span-3 flex flex-col justify-between gap-4 p-4 z-10'>
			<div className='flex flex-col gap-2 p-4 lg:w-3/5 border border-white/40 rounded-xl bg-white/10 backdrop-blur-lg'>
				<p className='text-lg'>Conecte-se Conosco</p>
				<p>Mantenha-se Atualizado nas Nossas Novidades e Venha Criar Algo Conosco!</p>
				<div className='h-px w-full bg-white' />
				<div className='flex justify-between items-center flex-wrap gap-2'>
					<Link
						href={'#'}
						className={'text-black bg-white p-1 rounded-full hover:scale-110 transition-transform'}
					>
						<AiOutlineTwitter />
					</Link>
					<Link
						href={'#'}
						className={'text-black bg-white p-1 rounded-full hover:scale-110 transition-transform'}
					>
						<AiFillInstagram />
					</Link>
					<Link
						href={'#'}
						className={'text-black bg-white p-1 rounded-full hover:scale-110 transition-transform'}
					>
						<IoLogoWhatsapp />
					</Link>
					<Link
						href={'#'}
						className={'text-black bg-white p-1 rounded-full hover:scale-110 transition-transform'}
					>
						<AiOutlineGithub />
					</Link>
					<Link
						href={'#'}
						className={'text-black bg-white p-1 rounded-full hover:scale-110 transition-transform'}
					>
						<BiLogoLinkedin />
					</Link>
				</div>
			</div>
			<div className='flex flex-col gap-2 p-4 w-full border border-white/40 rounded-xl bg-white/10 backdrop-blur-lg'>
				<p className='text-xl'>Nossos Serviços:</p>
				<div className='grid lg:grid-cols-2 gap-4'>
					{servicesData.map((data, index) => (
						<div
							key={`Service - ${index}`}
							className='flex flex-col gap-4 p-4 rounded-3xl border border-white/40 bg-white/30 backdrop-blur-md'
						>
							<div className='flex items-center gap-2 text-black'>
								<div className={'bg-neutral-200 p-1.5 rounded-full hover:scale-110 transition-transform'}>
									{data.icon()}
								</div>
								<p className='font-bold'>{data.name}</p>
							</div>
							<p className='text-neutral-800'>{data.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
