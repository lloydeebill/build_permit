import Link from "next/link";

const NavLink = ({href,title}) => {
    return (
        <Link 
            href={href} 
            className='block py-2 pl-3 pr-4 text-2xl font-semibold rounded md:p-0 text-white hover:text-blue-400'>
            {title}
        </Link>
    );
};

export default NavLink; 