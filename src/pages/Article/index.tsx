import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { iArticles } from "../Home"
import styles from './Article.module.css'

export function Article() {
    const [article, setArticle] = useState<iArticles>()

    const { id } = useParams()

    async function fetchArticle() {
        const response = await api.get(`/articles/${id}`)
        setArticle(response.data)
    }

    useEffect(() => {
        fetchArticle()
    }, [])

    return (
        <section className={styles.articleContainer}>
            <span>{article?.tag}</span>
            <h1>{article?.title}</h1>
            <h2>{article?.subtitle}</h2>
            <p>{article?.article}</p>
        </section>)
}