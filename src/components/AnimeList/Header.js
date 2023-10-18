import Link from "next/link"

const Header = ({title, linkHref}) => {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link href={linkHref} className="md:text-xl text-md underline hover:text-green-600 transition-all">Lihat Semua</Link>
        </div>
    )
}

export default Header