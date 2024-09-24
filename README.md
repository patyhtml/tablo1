# Tablo - Aplikacja do zarządzania pracą dla team-ów kreatywnych

## Pages

* **Strona główna** Tablo z opisem funkcjonalności
* **Pricing** (podstrona) możliwość zapoznania się z pakietami i obliczeniem pakietu – przejście do płatności jeszcze nie jest gotowe.
* **Sign in** (podstrona) możliwość założenia konta użytkownika po rejestracji użytkownik pojawia się na stronie /board
* **Log in** (podstrona) logowanie się do aplikacji (gdzie użytkownik pojawia się na stronie /board)
* **Panel aplikacji** Zarządzaj kreatywnymi projektami w łatwy i przejrzysty sposób.

## Pages (app)

<details>
<summary><b>Board</b></summary>
Tablica z zadaniami „To do”, „Doing”, „Done” + możliwość w łatwy sposób dodawanie kolejnej kolumny do tablicy o nazwie według preferencji użytkownika (jeszcze nie gotowe). Dodawanie taska przy pomocy kliknięcia w „+” (gotowe). Dodawanie boarda (nie gotowe).
</details>
<details>

<summary><b>Karta projektu „New Project”</b></summary>
składająca się z formularza:

* Nazwa projektu
* Description - opisu projektu
* To invite people your team” - dodawanie użytkownika poprzez e-mail
* Tag- dodawanie tagu np. „Development”, „Design”, „Legal”
* Wybór priority: Low, Medium, High
* Deadline: Start date - Due date
* Add project- dodawanie zdjęć, plików

Możliwość zapisu taska na board po kliknięciu w button „Save as” – task pojawia się na tablicy (gotowe)
</details>

<details>
<summary><b>Create pain point</b></summary>
„Drag a point into the image” - nanoszenie punktu na obraz (projekt), symultanicznie pojawia się okno chatu w panelu bocznym z użytkownikiem komentującym – (okno zawiera awatar użytkownika i opis co jest do zmiany w danym projekcie. (Nanoszenie punktu jest gotowe, ale na razie jeszcze mam do dopracowania ścieżkę docelowo chciałabym, żeby do Create pain point przechodziło się z New Project z poziomu pliku oraz zrobię jeszcze galerie projektów z której też po przez dany projekt/zdjęcie będzie dało się przejść do panelu w którym będzie można dodawać punkty.
</details>

## Concept

Nie wymieniaj się tonami e-maili, aby wyrazić swoją opinię na temat projektów. Wystarczy dodać punkty korekcyjne do projektu w łatwy sposób, aby cały zespół mógł od razu zobaczyć co poprawić, żeby osiągnąć cel. W przyszłości chce rozwinąć projekt o wszystkie brakujące elementy oraz ulepszyć wizualnie i UI i UX.

## Requirements

* [NodeJS (>20.x.x)](https://nodejs.org/en/download/package-manager)
* [MySQL (~8.x.x)](https://dev.mysql.com/downloads/mysql)

### Optional

* [MySQL Workbench (~8.x.x)](https://dev.mysql.com/downloads/workbench)

## Instalation

### Database

Please create a user ``root`` with password ``root`` in MySQL and then import ``tablo.sql`` file.

### Server

```cd server && npm install```

### Client

```cd client && npm install```

## Launch

### Server

```cd server && npm start```

### Client

```cd client && npm start```

Then go to [localhost:3000](http://localhost:3000)
