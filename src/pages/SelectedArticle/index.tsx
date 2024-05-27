import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../lib/axios"
import { iArticles } from "../../contexts/NavigationContext"
import styles from './Article.module.css'
import { dateTimeFormatter } from "../../ultils/formatter"
import { NavigationContext } from "../../contexts/NavigationContext"
import { Loading } from "../../components/Loading"

export function SelectedArticle() {

    const { tagColors } = useContext(NavigationContext)
    const { loading, activeLoading, inactiveLoading } = useContext(NavigationContext)

    const [article, setArticle] = useState<iArticles>()

    const { id } = useParams()

    async function fetchArticle() {
        const response = await api.get(`/articles/${id}`)
        setArticle(response.data)
    }

    useEffect(() => {
        activeLoading()
        setTimeout(() => {
            fetchArticle()
            inactiveLoading()
        }, 3000)
    }, [])



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
        !loading ? (
            <section className={styles.articleContainer} >
                {article &&
                    <>
                        <span className={styles.tag} style={{ color: tagColors[article.tag] }}>{article.tag}</span>
                        <h1 className={styles.title}>{article.title}</h1>
                        <h2 className={styles.publicity}>{article.subtitle}</h2>
                        <span className={styles.publishedAt}>
                            {dateTimeFormatter.format(new Date(article.createdAt)).replace(',', ' as ')}, por Redação
                        </span>
                        <section className="publicityCard">
                            <h1 className="publicityTitle">Publicidade</h1>
                        </section>
                        <article >
                            {article.article && formatArticleContent(article.article)}
                        </article>
                    </>
                }
            </section >
        ) : (
            <Loading />
        )
    )
}