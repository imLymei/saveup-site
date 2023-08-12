import RoundButton from '../ui/RoundButton';
import MenuHolder from '../ui/menu/MenuHolder';
import MenuItem from '../ui/menu/MenuItem';
import MenuItemHolder from '../ui/menu/MenuItemHolder';
import { GiHamburgerMenu } from 'react-icons/gi';
import { servicesData } from '@/utils/const';

export default function Menu() {
	return (
		<div className='z-50'>
			<MenuHolder>
				<RoundButton className='hover:bg-purple-500/10 transition'>
					<p className='font-semibold'>menu</p> <GiHamburgerMenu />
				</RoundButton>
				<MenuItemHolder grid>
					{servicesData.map((data, index) => (
						<MenuItem key={`Service Menu - ${index}`} hasDescription description={data.name}>
							{data.icon({ size: 30 })}
						</MenuItem>
					))}
				</MenuItemHolder>
			</MenuHolder>
		</div>
	);
}
