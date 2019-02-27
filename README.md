# Project Name

## Description

App to help NFP recycle tins and bottles.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Donation** As a user I can add a donation of garbage, and somebody can come to pick them
-  **Pick Garbage** As a user I can reserve a certain collection
-  **Search Garbage** As a user I want to search garbage
-  **See storages** As a user I want to see where i can take the garbage to be recycled

## Backlog

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list items the user is collected/donated
- list of events created by the user

Geo Location:
- add geolocation
- show collection points in a map
- show all storages in a map in the garbage list page

Appraisal:
- Show user all the actions that have improved the enviroment thanks to him

Events:
- Add Events with date and place where you need help to do something
- Confirm assistance of users

  
# Client

## Routes
| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get`  | `/` | Home| public | Show donate and collect buttons|
| `get`  | `/login` | Login| public | Show login page|
| `post`  | `/auth/login` | Login| public | Send data to the api to make login effective|
| `get`  | `/signup` | Signup| public | Show signup page|
| `post`  | `/auth/signup` | Signup| public | Send data to the api to make signup effective|
| `get`  | `/donate` | Donate| user | Show donation page with form|
| `post`  | `/donate` | Donate| user | publish donation adding it to the db|
| `get`  | `/collections` | Collect| user | Show collections page with a list of all the donations|
| `post`  | `/collections` | Collect| user | reserve one collection|
| `get`  | `/storages` | Storages| user | Show storages page with a list of all the storages|


## Components

- Login
-wait for it

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous  


## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/WYgAmhr4/final-boss) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)