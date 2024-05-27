import styles from './MainArticles.module.css'
import { iArticles } from '../../..'
import { useContext } from 'react'
import { NavigationContext } from '../../../../../contexts/NavigationContext'

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
    const {setNavigationPath} = useContext(NavigationContext)

    function handleSelectArticle(event: React.PointerEvent) {
        setNavigationPath(event.currentTarget.id)
    }

    return (
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
    )
}