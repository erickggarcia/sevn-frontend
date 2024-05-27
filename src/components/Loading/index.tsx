import styles from './Loading.module.css'

export function Loading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.content}>
                <span className={styles.spinner}></span>
                <div >Carregando...</div>
            </div>
        </div>
    )
}