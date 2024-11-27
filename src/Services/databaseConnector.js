const { MongoClient } = require("mongodb");
//the below line could be made into an environment the required in
const url = "mongodb://root:password@localhost:27017";

const getDatabase = async () => {
  const connnection = await MongoClient.connect(url);
  return connection.db("robot_stores");
};

module.exports = { getDatabase };
