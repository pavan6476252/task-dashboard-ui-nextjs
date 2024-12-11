"use client"

import HeaderBar from '@/components/HeaderBar';
import './globals.css'
import { usePathname } from "next/navigation";
import { StatsProvider } from '@/data/statsContext';
import Link from 'next/link';


const navLinks = [
  { name: 'Dashboard', href: '/' },
  { name: 'Skill Test', href: '/skill-test' },
  { name: 'Internship', href: '/internship' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en ">
      <body className="flex h-screen overflow-y-hidden bg-white ">


        <main className="flex-1">

          <HeaderBar />
          <div className="flex h-full mt-5">

            <aside className="w-48 ">
              <nav className="mt-4">
                <ul className='space-y-2'>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 ${pathname === link.href
                          ? ' bg-gray-200 text-violet-900 rounded-tr-full rounded-br-full'
                          : 'text-gray-600 hover:bg-gray-100'
                          } font-semibold`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="p-6 w-full h-full">
                <StatsProvider>
                  {children}
              </StatsProvider>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
