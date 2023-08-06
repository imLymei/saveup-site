import cn from '@/utils/cn';

export default function RoundButton({
	children,
	className,
	isWhite = false,
	fill = false,
}: {
	children: React.ReactNode;
	className?: string;
	isWhite?: boolean;
	fill?: boolean;
}) {
	return (
		<div
			className={cn(
				'flex items-center gap-2 py-2 px-4 border rounded-3xl w-fit flex-none select-none cursor-pointer',
				{
					'bg-white text-black': fill && isWhite,
					'bg-black text-white': fill && !isWhite,
					'border-black': !isWhite,
					'border-white': isWhite,
				},
				className
			)}
		>
			{children}
		</div>
	);
}
