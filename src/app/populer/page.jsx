import Animelist from "@/components/AnimeList"
import Header from "@/components/AnimeList/Header"

const Page = async () => {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
    const topAnime = await response.json()

    return (
        <>
            <section>
                <Header title="Paling Populer" />
                <Animelist api={topAnime} />
            </section>
        </>
    )
}

export default Page