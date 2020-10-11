import styles from '../../styles/Home.module.css'
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <FacebookIcon fontSize="small" />
                <InstagramIcon fontSize="small" />
                Something
            </div>
            <div>
                <CopyrightIcon fontSize="small" /> &nbsp; Copyright 2020. Todos os direitos Reservados.
            </div>
            
        </footer>
    )
}