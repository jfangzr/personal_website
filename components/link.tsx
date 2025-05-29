import Link from 'next/link'

export function BlueLink({href, children, newPage = false}: {href: string, children: React.ReactNode, newPage?: boolean}) {
    return <Link className="text-blue-500 hover:opacity-80 cursor-pointer" target={newPage ? "_blank" : "_self"}href={href}>{children}</Link>
}