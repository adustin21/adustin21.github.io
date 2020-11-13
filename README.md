# adustin21.github.io
НАСТРОЙКА И УСТАНОВКА

- Склонируйте репозиторий https://github.com/adustin21/adustin21.github.io/ 
- Измените данные в файле data/data.js и скопируйте все файлы в Ваш репозиторий github.pages
- Для создания репозитория github.pages необходимо создать репозиторий с именем username.github.io, где username Ваше имя пользователя github
- Для настройки страницы необходимо изменить данные в файле data/data.js следующим образом:
  
ПЕРСОНАЛИЗАЦИЯ (pageSettings)
  
Для изменения вашей Аватарки измените параметр logo: "url", где url - это ссылка на вашу фотографию.

Для изменения имени пользователя измените параметр name: "nickname", где nickname - это Ваше имя.
  
ССЫЛКИ (links)
  
Для добавления ссылки вставтье в массив links следующий объект:


        {
            name: "Имя сайта",
            subtitle: "подзаголовок",
            link: "https://url.com",
            color: "default"
        },
        
        
Объекты должны разделяться запятыми.
    
ЧЕРНОВИКИ (drafts)
   
Для добавления черновика вставтье строку в массив, строки должны разделяться запятыми.

Для однострочного черновика можно использовать '' (одинарые кавычки)  или "" (дdойные кавычки), для многострочного - только `` (одинарные обратные кавычки).
   
УПРАВЛЕНИЕ

- Текст черновика можно склопировать по одинарному клику, после копирования внизу экрана появится сообщение подтверждающее статус копирования
- Текст заметки можно скопировать по двойному клику, после копирования внизу экрана появится сообщение подтверждающее статус копирования (заметку можно создать вручную, она хранится до обновления страницы) 
