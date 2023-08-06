import RoundButton from '../ui/RoundButton';
import MenuHolder from '../ui/menu/MenuHolder';
import MenuItem from '../ui/menu/MenuItem';
import MenuItemHolder from '../ui/menu/MenuItemHolder';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import { FiChrome } from 'react-icons/fi';
import { FaMobileAlt } from 'react-icons/fa';
import { LiaAddressCard } from 'react-icons/lia';

export default function Menu() {
	return (
		<MenuHolder>
			<RoundButton className='hover:bg-purple-500/10 transition'>
				<p className='font-semibold'>Menu</p> <GiHamburgerMenu />
			</RoundButton>
			<MenuItemHolder grid>
				<MenuItem hasDescription description='Desenvolvimento de Software'>
					<TbDeviceDesktopCode size={30} />
				</MenuItem>
				<MenuItem hasDescription description='Desenvolvimento Web'>
					<FiChrome size={30} />
				</MenuItem>
				<MenuItem hasDescription description='Desenvolvimento Mobile'>
					<FaMobileAlt size={30} />
				</MenuItem>
				<MenuItem hasDescription description='Marketing Digital e Identidade Visual'>
					<LiaAddressCard size={30} />
				</MenuItem>
			</MenuItemHolder>
		</MenuHolder>
	);
}
