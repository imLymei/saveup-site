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
				'hidden absolute left-1/2 -translate-x-1/2 w-40 gap-2 p-2 bg-white border border-black rounded-md',
				{
					'group-hover/menu:grid grid-cols-2': grid,
					'group-hover/menu:flex flex-col justify-center items-center': !grid,
				}
			)}
		>
			{children}
		</div>
	);
}
