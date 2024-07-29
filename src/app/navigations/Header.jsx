import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#a14e46] shadow px-4 lg:px-6 h-14 flex items-center">
            <Link
                href="#"
                className="flex items-center justify-center"
                prefetch={false}>
                <LampIcon className="size-6 text-white" />
                <span className="sr-only">Lantern Galleries</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 text-white">
                <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    Explore
                </Link>
                <Link
                    href="#featured"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    Featured
                </Link>
                <Link
                    href="#experience"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    360 Experience
                </Link>
                <Link
                    href="#artists"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}>
                    Artists
                </Link>
            </nav>
        </header>
    )
}

function LampIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M8 2h8l4 10H4L8 2Z" />
            <path d="M12 12v6" />
            <path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
        </svg>
    )
}
