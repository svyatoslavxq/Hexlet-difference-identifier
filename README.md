### Hexlet tests and linter status:
[![Actions Status](https://github.com/svyatoslavxq/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/svyatoslavxq/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/144a49fede27ca8f5c42/maintainability)](https://codeclimate.com/github/svyatoslavxq/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/144a49fede27ca8f5c42/test_coverage)](https://codeclimate.com/github/svyatoslavxq/frontend-project-lvl2/test_coverage)

<h1><b>Вычислитель отличий</b></h1>
Проект представляет собой программу, определяющую разницу между двумя структурами данных. Принимает два относительных или абсолютных пути с json и yaml файлами. Выводит отличия в их структуре в зависимости от указанного формата вывода - plain, stylish или json.   

<h2><b>Примеры работы</b></h2>

<h3><b>Плоские json файлы</b></h3>

[![asciicast](https://asciinema.org/a/517244.svg)](https://asciinema.org/a/517244)

---

<h3><b>Плоские yaml файлы</b></h3>

[![asciicast](https://asciinema.org/a/517245.svg)](https://asciinema.org/a/517245)

---

<h3><b>Рекурсивное сравнение</b></h3>

[![asciicast](https://asciinema.org/a/517246.svg)](https://asciinema.org/a/517246)

---

<h3><b>Плоский формат вывода</b></h3>

[![asciicast](https://asciinema.org/a/517247.svg)](https://asciinema.org/a/517247)

---

<h3><b>Вывод в формате json</b></h3>

[![asciicast](https://asciinema.org/a/517248.svg)](https://asciinema.org/a/517248)

---

---

<h2><b>Команды</b></h2>


```
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           output usage information
```
---

<h3><b>Установка</b></h3>

```
npm install gendiff
```
[![asciicast](https://asciinema.org/a/516996.svg)](https://asciinema.org/a/516996)

<h3><b>Запуск</b></h3>

```
gendiff <путь к первому файлу> <путь ко второму файлу> 
```
