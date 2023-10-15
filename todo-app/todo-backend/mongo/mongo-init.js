const {
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = require("../util/config");

db.createUser({
  user: MONGO_INITDB_ROOT_USERNAME,
  pwd: MONGO_INITDB_ROOT_PASSWORD,
  roles: [
    {
      role: "dbOwner",
      db: MONGO_INITDB_DATABASE,
    },
  ],
});

db.createCollection("todos");

db.todos.insert({text: "Write code", done: true});
db.todos.insert({text: "Learn about containers", done: false});
