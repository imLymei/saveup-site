import cn from '@/utils/cn';

export default function MenuItemHolder({
	children,
	grid = false,
}: {
	children: React.ReactNode;
	grid?: boolean;
}) {
	return (
		<div
			className={cn(
				'opacity-0 scale-y-0 group-hover/menu:opacity-100 group-hover/menu:scale-y-100 transition-all origin-top duration-200 absolute left-1/2 -translate-x-1/2 w-40 gap-2 p-2 bg-white border border-black rounded-md',
				{
					'grid grid-cols-2': grid,
					'flex flex-col justify-center items-center': !grid,
				}
			)}
		>
			{children}
		</div>
	);
}
