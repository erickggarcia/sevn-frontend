import styles from './MainArticles.module.css'
import { iArticles } from '..'

interface iTagColors {
    Economia: string
    Educação: string
    Diversidades: string
}

interface MainArticlesProps {
    featuredArticle: iArticles
    otherHighlightsArticles: iArticles[]
    tagColors: iTagColors
}

export function MainArticles({ featuredArticle, otherHighlightsArticles, tagColors }: MainArticlesProps) {
    return (
        <section className={styles.mainSectionContainer}>
            {
                featuredArticle &&
                <article>
                    <span className={styles.tag} style={{ color: tagColors[featuredArticle.tag] }} >{featuredArticle.tag}</span>
                    <h1 className={styles.featuredArticleTitle}>{featuredArticle.title}</h1>
                </article>
            }
            <section className={styles.highlightSectionContainer}>
                {
                    otherHighlightsArticles && otherHighlightsArticles.map((highlight) => (
                        < article className={styles.highlightArticles}>
                            <img src={highlight.photo} alt="" />
                            <span className={styles.tag} style={{ color: tagColors[highlight.tag] }} >{highlight.tag}</span>
                            <h1 className={styles.highlighTitle} >{highlight.title}</h1>
                        </article>
                    ))
                }
            </section>
        </section>
    )
}