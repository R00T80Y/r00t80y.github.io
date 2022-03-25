## Опубликование пакета
~~~shell
  npm login
  npm whoami
  npm publish --access public
~~~
~~~js
{
  "scripts": {
    "publish": "npm run build && npm version patch && npm publish --access public"
  }
}
~~~

## Dependencies
Библиотеки которые нужны для пакета, предполагается что они будут установлены в проекте где будет использоватся этот пакет
~~~shell
{
  "peerDependencies": { react: "*", react-dom: "*" }
}
~~~

## Ссылка на локальный репозиторий с пакетом
~~~shell
npm link
npm link <название пакета>
~~~
