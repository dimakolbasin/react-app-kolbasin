import * as React from "react";
import style from "./footer.module.css"

const Footer = () => {
        return (
            <footer>
                <div className={style.container}>
                    <div className={style.footer__inner}>
                        <div className={style.footer__call}>
                            <h5 className={style.footer__callText}>обратная связь</h5>
                        </div>
                        <div className={style.footer__logo}>
                            <a className={style.footer__logoSocial} href="#"><img src="../../assets/img/icon/facebook-logo.png" alt="fb"/></a>
                            <a className={style.footer__logoSocial} href="#"><img src="../../assets/img/icon/twitter.png" alt="tw"/></a>
                            <a className={style.footer__logoSocial} href="#"><img src="../../assets/img/icon/vk.png" alt="vk"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        )
}

export default Footer;
