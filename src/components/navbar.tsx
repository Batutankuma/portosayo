'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

type routerNavbar = {
    name: string,
    href: string
}

const routerNavbar: routerNavbar[] = [
    { name: 'home.', href: '/' },
    { name: 'projet.', href: '/projet' },
    { name: 'contact.', href: '/contact' }
]

export default function Navbar() {
    const pathname = usePathname();

    return (
        <div className="bg-[#131315] w-full h-16 place-content-center p-5 rounded-full">
            <div className="flex flex-row">
                <div className="basis-9/12">
                    <h1 className="font-bold text-orange-300">Portosayo</h1>
                </div>
                <ul className="basis-3/12 flex flex-row space-x-10 justify-between">
                    {routerNavbar.map((e) => (
                        <li key={e.name}>
                            <Link href={e.href} className={clsx("font-semibold text-gray-600",{'text-white': pathname == e.href})}>{e.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    )
}