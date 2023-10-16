db.createUser({
  user: process.env.MONGO_INITDB_ROOT_USERNAME,
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
  roles: [
    {
      role: "dbOwner",
      db: process.env.MONGO_INITDB_DATABASE,
    },
  ],
});

db.createCollection("todos");

db.todos.insert({text: "Write code", done: true});
db.todos.insert({text: "Learn about containers", done: false});
