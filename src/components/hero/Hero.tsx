import LeftHero from './LeftHero';
import RightHero from './RightHero';

export default function Hero() {
	return (
		<div className='fixed grid grid-cols-7 h-screen p-4 gap-4 bg-[url("/images/bg-hero.jpg")] bg-contain bg-right'>
			<LeftHero />
			<RightHero />
			<div className='h-screen w-[90vw] absolute top-0 left-0 bg-gradient-to-r from-purple-500 from-30% to-80% z-0' />
		</div>
	);
}
