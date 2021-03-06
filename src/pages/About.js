import React from 'react';

const About = () => (
  <div className="container">
    <h1>About page - v2</h1>
    <p>Это приложение для поиска пользователей по нику на GitHub и просмотру <span className="done">10</span> 30 (пока что) репозиториев выбранного пользователя.</p>
    <p>Приложение написано без использования классов. Только функциональные компоненты и хуки.
      В первой версии для хранения данных использовался useContext.
      Вторая версия, при серьезном внешнем сходстве, использует другой подход к хранению данных - Redux.
      Это позволяет, в частности, не запрашивать повторно данные пользователя, если они были получены в рамках сеанса.</p>

    <h2>To do</h2>
    <p>Как всегда есть куча мыслей о том, что можно улучшить:</p>
    <ul>
      <li className="done">работа с репозиториями - не только 10, получать и сохранять все,</li>
      <li>работа с репозиториями - <span className="done">научиться сортировать (полученные или при запросе?),</span> лучше подписать и показывать текущую,</li>
      <li className="done">работа с репозиториями - давать больше информации, сделать значки,</li>
      <li className="done">корректная работа при переходе по прямой ссылке на профиль - сейчас заглушка там,</li>
      <li className="done">нормальный лоадер вместо текста,</li>
      <li>проверка раскладки при вводе запроса,</li>
      <li>и... </li>
    </ul>
    <p>Хочется сделать ещё много чего. А если мысли есть, можете форкнуть и улучшить, а можете просто написать мне!)</p>
    <h3>Обновления 22.12.2019</h3>
    <p>итак, сегодня добавились:</p>
    <ul>
      <li>я получаю и сохраняю в store все репозитории пользователя, а не первые 30,</li>
      <li>добавлена сортировка, теперь надо сделать более понятным её отображение - отмечать текущую.</li>
    </ul>
    <h3>Обновления 23.12.2020</h3>
    <ul>
      <li>изменена логика экспорта-импорта страниц (внешне не видно),</li>
      <li>переработан компонент навигации (внешне не видно),</li>
      <li>убрал API-ключ из запросов - вроде и без него работает),</li>
      <li>добавил в навигационную панель ссылку на профиль - странно, когда профиль открыт, а ни одна ссылка не активна,</li>
      <li>добавлена страница Sandbox для тестов компонентов.</li>
    </ul>
    <h3>Обновления 24.12.2020</h3>
    <ul>
      <li>добавлен запрос на получение топ-10 репо на JavaScript,</li>
      <li>результат пока выводится на главной, пока нет запроса, простым списком.</li>
    </ul> 
  </div>
);

export default About;
