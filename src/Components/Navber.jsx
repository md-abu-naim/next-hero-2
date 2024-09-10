"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navber = () => {
    const router = useRouter()
    const pathName = usePathname()
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Contacts',
            path: '/contacts'
        },
        {
            title: 'Servicess',
            path: '/servicess'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Blogs',
            path: '/blogs'
        },
        {
            title: 'Dashboard',
            path: '/dashboards'
        },
        {
            title: 'Categories',
            path: '/categories'
        },
    ]


    const handleButton = () => {
        router.push('/about')
    }

    if(!pathName.includes('/dashboards')) 
    return (
        <nav className="bg-black text-white flex justify-between">
          <ul className="flex justify-between items-center gap-6">
            {
                links.map(link => <Link className={`${pathName === link.path && 'text-red-700' }`} href={link.path}>{link.title}</Link>)
            }
          </ul>
          <button onClick={handleButton} className="bg-slate-600">Login</button>
        </nav>
    );
};

export default Navber;