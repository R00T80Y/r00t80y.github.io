## Ветки
~~~shell
git checkout -b название_ветки
~~~
~~~shell
git merge master
git rebase master
~~~
~~~shell
git push -u origin название_ветки
git push origin название_ветки --force
~~~

## Удалить файлы из git
Добавить в .gitignore
~~~js
src/demo
~~~
~~~shell
git rm -r --cached src/demo
~~~
