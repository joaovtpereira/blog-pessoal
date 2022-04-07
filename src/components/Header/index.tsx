import { ActiveLink } from "../ActiveLink";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <div className={styles.navContent}>
          <img src="/images/JV.svg" alt="Ig.news" />

          <nav>
            <ActiveLink activeClassName={styles.active} href="/">
              <a>Home</a>
            </ActiveLink>

            <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
              <a>Blog</a>
            </ActiveLink>

            <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
              <a>Contato</a>
            </ActiveLink>

            <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
              <a>Sobre</a>
            </ActiveLink>
          </nav>
                  
        </div>

        <div className={styles.iconsContent}>
          <ActiveLink  activeClassName={styles.active} href="https://www.linkedin.com/in/joaovtpereira/">
            <a target="_blank" rel="noreferrer">
              <LinkedInIcon color="primary" sx={{ fontSize: 40, color: '#fff', cursor: 'pointer', marginRight: 2 }} />
            </a>
          </ActiveLink>

          <ActiveLink  activeClassName={styles.active} href="https://www.instagram.com/joaovitorpr_/">
            <a target="_blank" rel="noreferrer">
            <InstagramIcon color="primary" sx={{ fontSize: 40, color: '#fff', cursor: 'pointer' }} />
            </a>
          </ActiveLink>
         
        </div>
      </div>
    </header>
  );
}
