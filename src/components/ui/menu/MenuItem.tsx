'use client';

import { useState } from 'react';

export default function MenuItem({
	children,
	hasDescription = false,
	description = '',
}: {
	children: React.ReactNode;
	hasDescription?: boolean;
	description?: string;
}) {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className='relative flex justify-center items-center p-2 border border-black hover:bg-purple-500/10 rounded-md cursor-pointer transition-colors'
			onMouseEnter={() => {
				if (hasDescription) setIsHover(true);
			}}
			onMouseLeave={() => {
				if (hasDescription) setIsHover(false);
			}}
		>
			{children}
			{isHover && hasDescription && (
				<div className='z-50 absolute bottom-0 translate-y-full left-1/2 -translate-x-1/2 whitespace-nowrap p-2 rounded-md bg-neutral-800 text-neutral-300 text-sm opacity-95'>
					<div className='absolute top-0 -translate-y-full left-1/2 -translate-x-1/2 w-px h-px border-8 border-transparent border-b-neutral-800' />
					{description}
				</div>
			)}
		</div>
	);
}
