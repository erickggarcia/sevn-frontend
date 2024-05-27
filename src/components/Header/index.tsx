import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'

export function Header() {
    const {pathname} = useLocation()
    const linkExists = pathname.includes('article')

    return (
        <header className={styles.header}>
            <Link to="/" className={`${styles.navigation} ${linkExists ? styles.active : ''}`}>
                <img src='/icons/backNavigation.svg' height={100 + '%'}/>
            </Link>
            <h1>SEVN NEWS</h1>
        </header>
    )
}