import * as React from "react";
import style from "./header.module.css"

class Header extends React.Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.container}>
                    <div className={style.header__inner}>
                        <div className={style.header__logo}>
                            <span><span className={style.header__logo1}>Techno</span><span
                                className={style.header__logo2}>Point</span></span>
                        </div>
                        <div className={style.header__nav}>
                            <div className={style.btn_nav}>
                                <input type="search" placeholder="search" className={style.header__search}/>
                            </div>
                            <div className={style.header__btn}>
                                <a className={style.icon} href="#"><img className={style.imgNav} src="../../assets/img/icon/like.png" alt="like"/></a>
                            </div>
                            <div className={style.header__btn}>
                                <a className={style.icon} href="#"><img className={style.imgNav} src="../../assets/img/icon/mail.png" alt="mail"/></a>
                            </div>

                            <div className={style.header__btn}>
                                <a className={style.icon} href="#"><img className={style.imgNav} src="../../assets/img/icon/basket.png" alt="basket"/></a>
                            </div>
                            <div id="body-counter">

                            </div>
                            <div className={style.header__btn}>
                                <a className={style.icon} href="#"><img className={style.imgNav} src="../../assets/img/icon/logout.png" alt="logout"/></a>
                            </div>

                            <div className={style.header__btn}>
                                <a className={style.icon} href="#"><img className={style.imgNav} src="../../assets/img/icon/burger.png" alt="logout"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
