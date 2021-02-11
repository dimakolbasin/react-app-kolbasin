import * as React from "react";
import style from "./loginIn.module.css";
import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";

// eslint-disable-next-line no-control-regex
const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/



const LoginIn = () => {

    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        history.push("/");
    }


    return (
        <main>
            <div className={style.container}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>React Forms</h1>

                            <div>
                                <label>name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    ref={register({required: true, min: 3})}
                                />
                                {errors.name?.type === 'required' && <div>Заполните ФИО</div>}
                                {errors.name?.type === 'min' && <div>минимальная длина 3 символа</div>}
                            </div>

                            <div>
                                <label>password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="text"
                                    ref={register({required: true, min: 6})}
                                />
                                {errors.password?.type === 'required' && <div>введите пароль</div>}
                                {errors.password?.type === 'min' && <div>минимальная длина пороля 6 символов</div>}
                            </div>

                            <div>
                                <label>email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    ref={register({ required: true, pattern: EMAIL_REGEX })}
                                />
                                {errors.email?.type === 'required' && <div>Заполните email</div>}
                                {errors.email?.type === 'pattern' && <div>Некорректный формат email</div>}
                            </div>

                            <button type="submit" >Отправить</button>
                </form>

            </div>
        </main>
    )
}

export default LoginIn;
