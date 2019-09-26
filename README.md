# mern-app

Basic Todo list Mern App that allows CRUD operations with JWT authentication to protect routes

## Steps to Run
1. git clone & cd into base project directory

2. Run install commands using [npm(downloaded here)](https://nodejs.org/en/download/)
```node
npm i && npm i prefix=client
```

3. create .env file at base directory and create keys for DATABASE_URL that links to a mongodb and JWT_SECRET with a secret pw of your choice
Example using mongodb hosted on [mlab(signup & create here)](https://mlab.com/):
```.env
DATABASE_URL = mongodb+srv://<your_mongodb_username>:<your_mongodb_password>@cluster0-lmwio.mongodb.net/test?retryWrites=true&w=majority
JWT_SECRET = <your_jwt_secret_password>
```

4. Run application using 
```node
npm run dev
```
5. application should be running at [http://localhost:3000/](http://localhost:3000/)

Todo list is displayed without auth guards but to create or delete a todo item you'll need to create a login and sign in first.
example: test1@email.com/password



