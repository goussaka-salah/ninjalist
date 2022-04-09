import Link from 'next/link'
import Image from 'next/image';
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Image src='/logo.png' width={100} height={50} alt='Ninja list' />
            </div>
            <div className="links">
            <Link href='/'>
                <a>home</a>
            </Link>
            <Link href='/about'>
                <a>about</a>
            </Link>
            <Link href='/ninjas'>
                <a>ninja listing</a>
            </Link>
            </div>
        </nav>
    );
};

export default Navbar;