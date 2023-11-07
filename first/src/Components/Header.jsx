import React from 'react'
import styles from './Header.module.css'
function Header() {
    return <>
        <body>
            <h1 className={styles.header}>Google</h1>
            <div className={styles.google1}>
                <input type="text" className={styles.googleIput} />
            </div>
            <div className={styles.flex}>
                <div className={styles.flexItems}>Gooogle search</div>
                <div className={styles.flexItems}>Im feeling Lucky</div>
            </div>
            <div className={styles.para}>
                <p>Develop Kills for in-demand jobs with <a href="">Google career Certificates</a></p><br /><br />
                <p>google offered in: <a href="">Hausa Igbo Ede Yoruba Nigerian Pigin</a></p>
            </div>
            <footer>
                <div>
                    <p>
                        Nigeria
                    </p>
                </div>
                <div>
                    <small>Our third decade of climate action: join us</small>
                </div>
            </footer>

        </body>

    </>
}

export default Header