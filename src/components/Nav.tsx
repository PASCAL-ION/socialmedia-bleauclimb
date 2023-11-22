import { 
    faMagnifyingGlass, 
    faHouse,
    faUserGroup,
    faMessage,
    faFilm
} from '@fortawesome/free-solid-svg-icons';

import logoSvg from '../assets/logo.svg';
import NavButton from './NavButton';


export default function Nav() {
  return (
    <>
        <nav className=' border-b-2 shadow-md px-3 py-2 border-subtleBorder_6'>
            <div>
                <ul className='flex gap-3 justify-between'>
                    <li className='w-12'><img src={logoSvg} alt="Logo"/></li>
                    <NavButton icon={faMagnifyingGlass}/>
                </ul>
            </div>
            <div className="mt-2">
                <ul className='flex justify-between'>
                    <NavButton icon={faHouse}/>
                    <NavButton icon={faUserGroup}/>
                    <NavButton icon={faMessage}/>
                    <NavButton icon={faFilm}/>
                </ul>
            </div>
        </nav>
    </>
  )
}
