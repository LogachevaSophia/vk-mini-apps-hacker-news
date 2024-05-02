# App Links

https://vk.com/app51913650

app_id: 51913650

vk.com: https://prod-app51913650-6630ac0bc424.pages-ac.vk-apps.com/index.html

iOS & Android:  https://prod-app51913650-6630ac0bc424.pages-ac.vk-apps.com/index.html

m.vk.com:       https://prod-app51913650-6630ac0bc424.pages-ac.vk-apps.com/index.html


# Description

This project is an implementation of VK-mini-app, which provides user with a list of news. Application utilizes FSD system to keep development flexible and maintenance ordered. Click button "more details" to open more detailed presentation page. Creation time, title and author are displayed as well. Page supperts automatic updates as well as force update by clicking corresponding button. 

On the detailed news viewing page, you can see the date of creation, a link to the source, the number of comments (including inactive ones), the author and the title of the post. Comments are a tree structure where child components are loaded only when the parent comment is clicked. Comments may be force updated by clicking corresponding button. If any data in the comments section contain html layout, it is parsed and presented as html markdown.

# Описание

Данный проект представляет собой  VK-mini-apps, в котором находится список новостей. Архитектура была выполнена по системе FSD. По кнопке "подробнее" можно перейти на страницу более детального представления. На странице со списком отображаются следующие данные: время создания, название, автор, рейтинг. Список обновляется каждую минуту или же можно обновить его "принудительно", нажав  на кнопку обновления.

На странице детального просмотра новости можно увидеть дату создания, ссылку на источник, количество комментариев (в том числе и не активных), автора и название поста. Комментарии представляют собой древовидную структуру, где дочерние компоненты подгружаются только при нажатии на родительский комментарий. Комментарии можно обновлять "принудительно", нажав на кнопку обновления. Если в тексте комментариев встречается html вёрстка, она учитывается и представляется в читаемом виде.



# Getting Stared
 
In the project directory, you can:
### init node_modules

### `yarn install`

## Run:

### `yarn start`
