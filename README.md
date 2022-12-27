# plantparenthood

Being a plant parent requires a lot of care and attention. With plantparenthood, you can create a collection of plants and specific directions on how to keep them thriving!

## Installation

In a terminal, type the following:

```
git clone git@github.com:jsongcodes/phase-3-sinatra-react-project.git

npm install

npm start
```

Open a terminal in VSCode and type in:

```
bundle install
```

## Migration and Seed

```
bundle exec rake db:migrate db:seed

bundle exec rake db:migrate
```

## Backend Server

To get the backend server to run, type the command line:

```
bundle exec rake server
```

In a browser window, go to http://localhost:9292/users or http://localhost:9292/plants.

## Frontend repo:

https://github.com/jsongcodes/plant-app-frontend

## Relationships within Database

### Users

has many plants

### Plants

plants belong to a user

## Usage

Plant parents are able to create a collection of plants with their information and directions on how to take care of them. They are able to see their existing plants, edit the plants' information, and delete their plants. New users are able to register and start this process.

## License

[MIT](https://choosealicense.com/licenses/mit/)
