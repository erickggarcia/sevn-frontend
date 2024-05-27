import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import { MainArticles } from "./mainArticles"
import { SecondaryArticles } from "./secondaryArticles"

type propTags = 'Economia' | 'Educação' | 'Diversidades'

export interface iArticles {
    id: number
    tag: propTags
    photo?: string
    title: string
    subtitle: string
    article: string
}

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

    const tagColors = {
        'Economia': '#FF2D2D',
        'Educação': '#248B28',
        'Diversidades': '#24538B'
    }

    return (
        <div >
            <MainArticles
                featuredArticle={featuredArticle}
                otherHighlightsArticles={otherHighlightsArticles}
                tagColors={tagColors}
            />
            <SecondaryArticles
                secondaryArticles={secondaryArticles}
                tagColors={tagColors}
            />
        </div>
    )
}