import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center gap-2 p-4">
                <Link href="/" className="md:text-2xl font-bold">GVNDANIMELIST</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar