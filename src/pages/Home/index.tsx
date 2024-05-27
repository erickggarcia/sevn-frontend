import { useContext, useEffect, useState } from "react"
import { api } from "../../lib/axios"
import { MainArticles } from "./components/mainArticles"
import { SecondaryArticles } from "./components/secondaryArticles"
import { iArticles } from "../../contexts/NavigationContext"
import { NavigationContext } from "../../contexts/NavigationContext"
import { Loading } from "../../components/Loading"

export function Home() {
    const [mainArticles, setMainArticles] = useState<iArticles[]>([])
    const [secondaryArticles, setSecondaryArticles] = useState<iArticles[]>([])
    const { loading, inactiveLoading, activeLoading } = useContext(NavigationContext)


    async function fetchMainArticles() {
        const response = await api.get('/articles/mainArticles')
        setMainArticles(response.data)
    }

    async function fetchSecondaryArticles() {
        const response = await api.get('/articles/secondaryArticles')
        setSecondaryArticles(response.data)
    }


    useEffect(() => {
        activeLoading()
        setTimeout(() => {
            fetchMainArticles()
            fetchSecondaryArticles()
            inactiveLoading()
        }, 3000)
    }, [])

    const featuredArticle: iArticles = mainArticles[0]
    const otherHighlightsArticles = mainArticles.slice(1, mainArticles.length)

    return (
        !loading ? (
            <div >
                <MainArticles
                    featuredArticle={featuredArticle}
                    otherHighlightsArticles={otherHighlightsArticles}
                />
                <SecondaryArticles
                    secondaryArticles={secondaryArticles}
                />
            </div>
        ) : <Loading />
    )
}