'use client';

import { useState } from 'react';

export default function MenuHolder({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className='relative group/menu'
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			{children}
			{/* {isOpen && <div className='absolute left-1/2 -translate-x-1/2 w-32 h-48 bg-red-500'></div>} */}
		</div>
	);
}
