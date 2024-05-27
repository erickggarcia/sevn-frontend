import styles from './SecondaryArticles.module.css'
import { iArticles } from '../../..'
import { useContext } from 'react'
import { NavigationContext } from '../../../../../contexts/NavigationContext'

interface iTagColors {
    Economia: string
    Educação: string
    Diversidades: string
}

interface MainArticlesProps {
    secondaryArticles: iArticles[]
    tagColors: iTagColors
}

export function SecondaryArticles({ secondaryArticles, tagColors }: MainArticlesProps) {

    const {setNavigationPath} = useContext(NavigationContext)

    function handleSelectArticle(event: React.PointerEvent) {
        setNavigationPath(event.currentTarget.id)
    }

    return (
        <section className={styles.SecondaryArticlesContainer}>
            {secondaryArticles &&
                secondaryArticles.map((secondary) => (
                    <article key={secondary.id} 
                        id={secondary.id.toString()} 
                        className={styles.secondaryArticles}
                        onPointerDown={handleSelectArticle}
                        >
                        <div className={styles.separator} style={{ background: tagColors[secondary.tag] }}></div>
                        <h2 className={styles.secondaryTitle}>{secondary.title}</h2>
                    </article>
                ))
            }
        </section>
    )
}