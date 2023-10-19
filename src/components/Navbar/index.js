import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-green-600">
            <div className="flex md:flex-row flex-col justify-between gap-2 p-4">
                <Link href="/" className="md:text-2xl font-bold text-white">GVNDANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar