import React from 'react';

export const About = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1>About page - v2</h1>
                <p>Это приложение для поиска пользователей по нику на GitHub и просмотру <span className="done">10</span> 30 (пока что) репозиториев выбранного пользователя.</p>
                <p>Приложение написано без использования классов. Только функциональные компоненты и хуки.
                    В первой версии для хранения данных использовался useContext.
                    Вторая версия, при серьезном внешнем сходстве, использует другой подход к хранению данных - Redux.
                    Это позволяет, в частности, не запрашивать повторно данные пользователя, если они были получены в рамках сеанса.</p>
                <p>Как всегда есть куча мыслей о том, что можно улучшить:</p>
                <ul>
                    <li>работа с репозиториями - <span className="done">не только 10,</span> получать и сохранять все,</li>
                    <li>работа с репозиториями - научиться сортировать (полученные или при запросе?),</li>
                    <li className="done">работа с репозиториями - давать больше информации, сделать значки,</li>
                    <li className="done">корректная работа при переходе по прямой ссылке на профиль - сейчас заглушка там,</li>
                    <li className="done">нормальный лоадер вместо текста,</li>
                    <li>проверка раскладки при вводе запроса,</li>
                    <li>и... </li>
                </ul>
                <p>Хочется сделать ещё много чего. А если мысли есть, можете форкнуть и улучшить, а можете просто написать мне!)</p>
            </div>
        </div>
    )
}
