import styles from './MainArticles.module.css'
import { iArticles } from '../../../../contexts/NavigationContext'
import { useContext } from 'react'
import { NavigationContext } from '../../../../contexts/NavigationContext'

interface MainArticlesProps {
    featuredArticle: iArticles
    otherHighlightsArticles: iArticles[]
}

export function MainArticles({ featuredArticle, otherHighlightsArticles }: MainArticlesProps) {
    const { tagColors, setNavigationPath } = useContext(NavigationContext)

    function handleSelectArticle(event: React.PointerEvent) {
        setNavigationPath(event.currentTarget.id)
    }

    return (
        <div className={styles.maxContainer}>
            <section className="publicityCard">
                <h1 className="publicityTitle">Publicidade</h1>
            </section>
            <section className={styles.mainSectionContainer}>
                {
                    featuredArticle &&
                    <article className={styles.featuredArticle} id={featuredArticle.id.toString()} onPointerDown={handleSelectArticle}>
                        <span className={styles.tag} style={{ color: tagColors[featuredArticle.tag] }} >{featuredArticle.tag}</span>
                        <h1 className={styles.featuredArticleTitle}>{featuredArticle.title}</h1>
                    </article>
                }
                <section className={styles.highlightSectionContainer}>
                    {
                        otherHighlightsArticles && otherHighlightsArticles.map((highlight) => (
                            < article key={highlight.id}
                                id={highlight.id.toString()}
                                className={styles.highlightArticles}
                                onPointerDown={handleSelectArticle}
                            >
                                <img src={highlight.photo} alt="" />
                                <span className={styles.tag} style={{ color: tagColors[highlight.tag] }} >{highlight.tag}</span>
                                <h1 className={styles.highlighTitle} >{highlight.title}</h1>
                            </article>
                        ))
                    }
                </section>
            </section>
        </div>
    )
}