import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import { MainArticles } from "./mainArticles"
import { SecondaryArticles } from "./secondaryArticles"

import { iArticles } from "../.."

export function Articles() {
    const [mainArticles, setMainArticles] = useState<iArticles[]>([])
    const [secondaryArticles, setSecondaryArticles] = useState<iArticles[]>([])

    async function fetchMainArticles() {
        const response = await api.get('/articles/mainArticles')
        setMainArticles(response.data)
    }

    async function fetchSecondaryArticles() {
        const response = await api.get('/articles/secondaryArticles')
        setSecondaryArticles(response.data)
    }


    useEffect(() => {
        fetchMainArticles()
        fetchSecondaryArticles()
    }, [])

    const featuredArticle: iArticles = mainArticles[0]
    const otherHighlightsArticles = mainArticles.slice(1, mainArticles.length)

    return (
        <div >
            <MainArticles
                featuredArticle={featuredArticle}
                otherHighlightsArticles={otherHighlightsArticles}
            />
            <SecondaryArticles
                secondaryArticles={secondaryArticles}
            />
        </div>
    )
}