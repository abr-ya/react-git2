import React from 'react';

export const About = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>About page - v2</h1>
                <p>Это приложение для поиска пользователей по нику на GitHub и просмотру 10 (пока что) репозиториев выбранного пользователя.</p>
                <p>Приложение написано без использования классов. Только функциональные компоненты и хуки.
                    В первой версии для хранения данных использовался useContext.
                    Вторая версия, при серьезном внешнем сходстве, использует другой подход к хранению данных - Redux.
                    Это позволяет, в частности, не запрашивать повторно данные пользователя, если они были получены в рамках сеанса.</p>
                <p>Как всегда есть куча мыслей о том, что можно улучшить:
                    <ul>
                        <li>работа с репозиториями - не только 10,</li>
                        <li>работа с репозиториями - давать больше информации,</li>
                        <li>корректная работа при переходе по ссылке на профиль - сейчас заглушка там,</li>
                        <li>нормальный лоадер вместо текста,</li>
                        <li>проверка раскладки при вводе запроса,</li>
                        <li>и... </li>
                    </ul>
                    Хочется сделать ещё много чего. А если мысли есть, можете форкнуть и улучшить, а можете просто написать мне!)</p>
            </div>
        </div>
    )
}
