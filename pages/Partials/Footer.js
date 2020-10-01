import styles from '../../styles/Home.module.css'
import CopyrightIcon from '@material-ui/icons/Copyright';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <CopyrightIcon fontSize="small" /> &nbsp; Copyright 2020. Todos os direitos Reservados.
        </footer>
    )
}