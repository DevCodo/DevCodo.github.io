# Тестовое задание для frontend-разработчика javascript

Задача - реализовать одностраничное приложение (SPA), в котором пользователь может зарегистрироваться и просмотреть личную информацию о себе.

Для простоты разработки данного приложения в виде backend-части в данном репозитории представлен файл `app.js`. backend-часть дополнять и изменять `не нужно`. Процесс запуска api на вашей машине описан ниже.
Авторизация и регистрация на backend-части реализована через [JSON Web Token](https://ru.wikipedia.org/wiki/JSON_Web_Token).

## Требования

Приложение должно состоять из следующих страниц:

1. `/login` - страница с формой входа
2. `/register` - страница с формой регистрации
3. `/` - Главная страница с информацией о пользователе.

**Описание страницы `/login`**

Здесь содержится форма авторизации пользователя.

Также должен быть предусмотрен переход на страницу `/register` в виде кнопки.

**Описание страницы `/register`**

Здесь содержится форма регистрации пользователя.

Также должен быть предусмотрен переход на страницу `/login` в виде кнопки.

**Описание страницы `/` - Главная страница**

Здесь содержится информация о пользователе - его аватар, текст о себе, имя пользователя.

Желательно оформить в виде карточки.

## Технические требования

- Убедитесь, что у вас стоит Node.js последней LTS версии: https://nodejs.org/en/
- Приложение должно быть написано на `javascript`.
- Используемый фреймворк - `Vuejs`.
- Компонентная библиотека - `Vuetify.js`

## Запуск API

1. Убедитесь, что у вас стоит последняя node LTS версии. Ссылка для скачивания: https://nodejs.org/en/
2. В консоли открыть папку `frontend`
3. Устанавливаем зависимости api - в консоли запускаем команду `npm install`
4. Запускаем api - в консоли запускаем команду `node app.js`

В результате в консоли получаем output:

```
Сервер с API стартовал по адресу http://localhost:8080
```

При выполнении запросов к api в консоли будут возникать логи, удобно для тестирования приложения.

## Запрос с jwt-токеном

Чтобы отправить запрос с токеном нужно указать заголовок `Authorization: Bearer ${токен пользователя}`

## Примечания

1. Реализацию frontend-части следует делать `в отдельном репозитории`, а не в этом репозитории. Этот репозиторий содержит в себе только backend-часть в виде api.
1. Во время разработки приложения не стоит изобретать велосипеды. Для компонентов формы и карточек предусмотрена библиотека `Vuetify.js`.
1. При работе с `Vue.js` следует использовать `Vuex`, `Vue-cli`, `Vue-router`
1. При перезапуске backend-части приложения список пользователей сбрасывается к стандартному состоянию!
1. Написанные unit/e2e-тесты будут плюсом. Для юнитов у нас используется `jest`, для e2e - `cypress`
1. Использование соверменного javascript-синтаксиса будет плюсом (ES5+ фишки)

---

# Результат проделанной работы

Результат данного тестового задания следует опубликовать на `github.com` в виде репозитория с публичным доступом

---

## Описание endpoint'ов API

Ниже будут представлены все возможные endpoint'ы api.

Важные замечания:

- По умолчанию api запускается по адресу `http://localhost:8080`
- При перезапуске api пользователи сбрасываются в стандартное состояние
- Для теста api можно использовать `postman` или любую другую утилиту, которая умеет слать http-запросы

### `/login/` - авторизация пользователя

Данный эндпоинт принимает запросы на авторизацию пользователей.
Метод HTTP-запроса - `POST`

### Тело запроса (в виде json)

| Поле     |  Тип   | Обязательно | Описание         |
| -------- | :----: | :---------: | ---------------- |
| username | String |      +      | Имя пользователя |
| password | String |      +      | Пароль           |

### Возможные ответы эндпоинта

#### 200 - успешная авторизация

| Поле  |  Тип   | Описание                     | Значение                    |
| ----- | :----: | ---------------------------- | --------------------------- |
| token | String | JWT-токен пользователя       | %сгенерированный jwt-токен% |
| error | String | Ошибка, если таковая имеется | null                        |

#### 401 - неправильные имя пользователя/пароль

| Поле  |  Тип   | Описание | Значение                                     |
| ----- | :----: | -------- | -------------------------------------------- |
| token | String | Токен    | null                                         |
| error |  null  | Ошибка   | "Введите правильные имя пользователя/пароль" |

---

### `/register/` - регистрация пользователя

Данный эндпоинт принимает запросы на авторизацию пользователей.
Метод HTTP-запроса - `POST`

### Тело запроса (в виде json)

| Поле     |  Тип   | Обязательно | Описание         |
| -------- | :----: | :---------: | ---------------- |
| username | String |      +      | Имя пользователя |
| password | String |      +      | Пароль           |

### Возможные ответы эндпоинтa

#### 200 - успешная регистрация

| Поле    |  Тип   | Описание  | Значение                               |
| ------- | :----: | --------- | -------------------------------------- |
| message | String | Сообщение | "Пользователь успешно зарегистрирован" |

### 401 - регистрация не удалась

| Поле    |  Тип   | Описание  | Значение                                          |
| ------- | :----: | --------- | ------------------------------------------------- |
| message | String | Сообщение | "Пользователь с таким именем уже зарегистрирован" |

---

### `/about/` - Информация о пользователе

Данный эндпоинт возвращает информацию о пользователе, которая есть на сервере
Метод HTTP-запроса - `GET`

### Возможные ответы эндпоинтa

### 200 - успешное получение информации

| Поле     |   Тип   | Описание                                         | Значение           |
| -------- | :-----: | ------------------------------------------------ | ------------------ |
| id       | Integer | id пользователя                                  | %id пользователя%  |
| username | String  | Имя пользователя                                 | %имя пользователя% |
| avatar   | String  | http-ссылка на картинку с аватаркой пользователя | %avatar%           |
| about    | String  | Текст "о пользователе"                           | %текст в api%      |

### 401 - пользователь не авторизован

Если в заголовке не передавать jwt-токен, либо jwt-токен был просрочен - вернется ответ

### 400 - не удалось получить информацию

| Поле    |  Тип   | Описание  | Значение                                        |
| ------- | :----: | --------- | ----------------------------------------------- |
| message | String | Сообщение | "Не удалось получить информацию о пользователе" |

---

## Полезные ссылки

- https://vuejs.org/ - Vuejs
- https://cli.vuejs.org/ - Vue-cli
- https://vuetifyjs.com/ - Vuetifyjs
- https://router.vuejs.org/- Vue-router
- https://www.getpostman.com/ - postman