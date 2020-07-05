import React from "react"
import links from "../constants/links"
import styles from "../css/navbar.module.css"
import logo from "../images/logo.png"
import logoSmall from "../images/logo-small.png"
import icons from "../constants/social-icons"
import { FaAlignJustify } from "react-icons/fa"
import { AppContext } from "../context"
import { Link } from "gatsby"

const Navbar = () => {
  const { size, handleOpenSidebar, height } = React.useContext(AppContext)

  if (size > 992) {
    return (
      <nav
        className={
          height < 80
            ? `${styles.navbar}`
            : `${styles.navbar} ${styles.navbarFixed}`
        }
      >
      <div className={styles.center}>
        <Link to="/">
          <img src={logo} alt="Albercas Prefabricadas"></img>
        </Link>
        <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>                    
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a key={icon.id} href={icon.url} className={styles.navIcon}>
                  {icon.icon}
                </a>
              )
            })}
          </div>
          </div>
      </nav>
    )
  }
  return (
    <nav
      className={
        height < 80
          ? `${styles.navbar}`
          : `${styles.navbar} ${styles.navbarFixed}`
      }
    >
      <div className={styles.header}>
        <img src={logoSmall} alt="Albercas Prefabricadas"></img>
        
        <button
          type="button"
          className={styles.toggleBtn}
          onClick={handleOpenSidebar}
        >
          <FaAlignJustify className={styles.toggleIcon}></FaAlignJustify>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
