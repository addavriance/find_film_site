# findmymovie!

## Описание

FindMyMovie — это веб-приложение, которое помогает пользователям находить фильмы по различным критериям, таким как отрывки, ключевые моменты, вкусы, жанры и другие параметры. Приложение использует передовые технологии, включая нейросети и API, для предоставления точных и актуальных результатов.

## Основные функции

- **Поиск фильмов по текстовому запросу**: Пользователи могут вводить текст до 250 символов, и приложение найдет соответствующие фильмы.
- **Фильтрация по жанру и вкусам**: Пользователи могут указать свои предпочтения, и приложение предложит фильмы, соответствующие их вкусам.
- **Проверка на негативный контент**: Все запросы проходят проверку на негативный контент, чтобы обеспечить безопасность и комфорт пользователей.
- **Интеграция с Кинопоиском**: Найденные фильмы отображаются с обложкой, названием, рейтингом, возрастным рейтингом, альтернативным названием и кратким описанием. Также предоставляется ссылка на страницу фильма на Кинопоиске.

## Технологии

- **Фронтенд**: Написан на React с использованием TypeScript.
- **Бэкенд**: Работает на Python и использует нейросеть Hugging Chat "command R+" для обработки запросов.
- **API**: Используется неофициальное API Кинопоиска для получения информации о фильмах.

## Как это работает

1. **Пользовательский запрос**: Пользователь вводит текст в поле для ввода и отправляет запрос.
2. **Проверка запроса**: Запрос проходит проверку на негативный контент.
3. **Обработка нейросетью**: Запрос передается нейросети Hugging Chat "command R+", которая анализирует текст и определяет название и год фильма.
4. **Поиск по Кинопоиску**: Полученная информация отправляется в поиск по критериям через неофициальное API Кинопоиска.
5. **Возврат результата**: Полученный результат возвращается пользователю и отображается в приложении.

## Зависимости

- **React**: Библиотека для создания пользовательских интерфейсов.
- **TypeScript**: Язык программирования, который является строго типизированной версией JavaScript.
- **Axios**: Библиотека для выполнения HTTP-запросов.
