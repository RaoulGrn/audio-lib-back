# Audio Library - Backend

This project was made for the technical assessment of MMCTech. My task was to design and implement a digital music library, where you’ll be able to visualize your artists and their albums with a description and their songs.
I also had to implement an autocomplete component that provides suggestions as a user enters a search box. 

* The data I used was provided in a json found in the root folder (/src) and was loaded to the database with a script (check main.ts)
* I used MongoDB for the database.

## Technologies Involved

* Backend in NestJs
* Frontend in React(vite).
  
### Other modules/plugins/technologies:
            * MongoDB - mongoose
            * passport
            * bcryptjs
            * JwtStrategy
         
## Installation
* Clone the repository
```bash
$ npm install
```
* Create .env file in root folder (/src) and enter your Database URI, JWT_SECRET and JWT_EXPIRES like in the provided photo.

<img src="https://github.com/RaoulGrn/audio-lib-back/assets/108396853/b32794fc-0fba-4457-a8ba-5f43c5f9d7b8" width="300" height="150">


## Running the app

```bash
# development
$ npm run start
```

