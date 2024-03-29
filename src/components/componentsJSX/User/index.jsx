import style from './css/user.module.css';
export default function User() {
    return (
        <div className={style.block}>
            <p className={style.surname}>Фамилия</p>
            <p className={style.name}>Имя</p>
            <p className={style.patronymic}>Отчество</p>
        </div>
    )
}