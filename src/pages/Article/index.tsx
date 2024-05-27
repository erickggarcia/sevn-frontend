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

    const tagColors = {
        'Economia': '#FF2D2D',
        'Educação': '#248B28',
        'Diversidades': '#24538B'
    }

    const formatArticleContent = (content: string) => {
        const formattedContent = content.replace(/'/g, '"')
        return formattedContent.split('.').map((paragraph, index) => (
            paragraph.trim() !== '' ? (
                <p key={index} className={styles.article}>
                    {paragraph.trim()}.
                    <br />
                </p>
            ) : null
        ))
    }

    return (
        <section className={styles.articleContainer}>
            {article &&
                <>
                    <span className={styles.tag} style={{ color: tagColors[article.tag] }}>{article.tag}</span>
                    <h1 className={styles.title}>{article.title}</h1>
                    <h2 className={styles.publicity}>{article.subtitle}</h2>
                    <section className="publicityCard">
                        <h1 className="publicityTitle">Publicidade</h1>
                    </section>
                    <article >
                        {article.article && formatArticleContent(article.article)}
                    </article>
                </>
            }
        </section>
    )
}