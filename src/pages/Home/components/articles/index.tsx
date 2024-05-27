import { useEffect, useState } from "react"
import { api } from "../../../../lib/axios"
import styles from './Articles.module.css'

type propTags = 'Economia' | 'Educação' | 'Diversidades'

interface iArticles {
    id: number
    tag: propTags
    photo?: string
    title: string
    subtitle: string
    article: string
}

export function Articles() {
    const [mainArticles, setMainArticles] = useState<iArticles[]>([])

    async function fetchMainArticles() {
        const response = await api.get('/articles/mainArticles')
        setMainArticles(response.data)
    }


    useEffect(() => {
        fetchMainArticles()
    }, [])

    const featuredArticle: iArticles = mainArticles[0]
    const otherHighlightsArticles = mainArticles.slice(1, mainArticles.length)
    console.log(otherHighlightsArticles)

    const tagColors = {
        'Economia': '#FF2D2D',
        'Educação': '#248B28',
        'Diversidades': '#24538B'
    }

    return (
        <div>
            <section>
                <article>
                    <span className={styles.tag} style={{ color: tagColors[featuredArticle.tag] }} >{featuredArticle.tag}</span>
                    <h1 className={styles.title}>{featuredArticle.title}</h1>
                </article>
            </section>
        </div >
    )
}