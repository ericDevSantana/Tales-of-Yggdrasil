import styles from '../../styles/Home.module.css'
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            
            <div className={[styles.grid, styles.icon]}>
                
                {/* <a style={{color: 'blue'}} href="https://www.facebook.com/toyrpg" target="_blank">
                    <FacebookIcon fontSize="small" />
                </a> */}
                
                &nbsp;&nbsp;

                <a style={{color: 'purple'}} href="https://www.instagram.com/tales_of_yggdrasil/" target="_blank">
                    <InstagramIcon fontSize="small" />
                </a>    
                
                &nbsp;&nbsp;

                <a href="https://tapas.io/series/A-Histria-de-Yggdrazil---As-Grandes-Raas/info" target="_blank">
                    <img style={{width: '25px', height: '25px'}} src="tapas.svg" alt="Tapas icon"></img>
                </a> 

            </div>

            <div>
                <CopyrightIcon fontSize="small" /> &nbsp; Copyright 2020. Todos os direitos Reservados.
            </div>
                        
        </footer>
    )
}