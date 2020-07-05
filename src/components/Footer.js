import React from "react"
import logo from "../images/white-logo.png"
import logoSmall from "../images/white-logo-small.png"
import styles from "../css/footer.module.css"
import icons from "../constants/social-icons"
import { AppContext } from "../context"
const Footer = () => {
  const { size } = React.useContext(AppContext)
  if (size > 992) {
    return (
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={logo} alt="Albercas Igui"></img>
        </div>
        <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className={styles.info}>
          © {new Date().getFullYear()} Albercas Igui Guadalajara. Derechos Reservados. 
        </div>
      </footer>
    )
  } else {
    return (
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <img src={logoSmall} alt="Albercas Igui"></img>
        </div>
        <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.icon}
              </a>
            )
          })}
        </div>
        <div className={styles.info}>
          © {new Date().getFullYear()} Albercas Igui Guadalajara. Derechos Reservados. 
        </div>
      </footer>
    )
  }
  
}

export default Footer
