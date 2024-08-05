import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({isLogin}) => {
    return (
        <header className='fixed top-0 bg-[#000] padding-x py-8 z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="Logo" width={160} height={39} className='object-cover' />
                </a>
                <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                    <li>
                        <a href="https://panel.moadii.ir/login" target="_blank" className='bg-coral-red px-4 p-2 rounded-lg text-black'>ورود</a>
                    </li>
                    {
                      
                        navLinks.map((item) => (
                            <li key={item.label}>
                                {
                                    !isLogin ?
                                    <a
                                    href={ item.href}
                                    className='leading-normal font-bold text-[15px] text-gray-300 hover:text-coral-red transition-all'
                                >
                                    {item.label}
                                </a> 
                                :
                                
                                <Link
                                to="/"
                                className='leading-normal font-bold text-[15px] text-gray-300 hover:text-coral-red transition-all'
                            >
                                {item.label}
                            </Link>
                                }
                               
                            </li>

                        ))
                    }
                </ul>
                <div className="hidden max-lg:block">
                <GiHamburgerMenu className='text-3xl text-white' />
                </div>
            </nav>
        </header>
    )
}

export default Nav;