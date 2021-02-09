import * as React from "react";
import style from "./navigation.module.css"

const Navigation = () => {
        return (
            <nav className={style.navigation}>
                <ul className={style.navigation__list}>
                    <li>
                        <a href="#">Каталог</a>
                        <ul>
                            <li><a href="#">apple</a></li>
                            <li><a href="#">samsung</a></li>
                            <li><a href="#">moto</a></li>
                            <li><a href="#">fly</a></li>
                            <li><a href="#">sony</a></li>
                            <li><a href="#">xiaomi</a></li>
                            <li><a href="#">honor</a></li>
                            <li><a href="#">lenovo</a></li>
                            <li><a href="#">meizu</a></li>
                            <li><a href="#">micro</a></li>
                            <li><a href="#">lg</a></li>
                            <li><a href="#">high</a></li>
                            <li><a href="#">xgody</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">главная</a>
                        <ul>

                        </ul>
                    </li>
                    <li>
                        <a href="#">доставка</a>
                        <ul>

                        </ul>
                    </li>
                    <li>
                        <a href="#">о нас</a>
                        <ul>

                        </ul>
                    </li>
                </ul>
            </nav>
        )
}

export default Navigation;
