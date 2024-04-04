const express = require("express");
const cors = require("cors");
const app = express();
const port = 3008;
const { Sequelize, DataTypes } = require("sequelize");

app.use(cors());
// Express middleware for parsing JSON
app.use(express.json());

//Conexion a la DB

// Database connection

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "prueba",
});
// Entity class for dynamic table creation
class Entity {
  constructor(name, fields) {
    this.name = name;
    this.model = sequelize.define(name, fields);
  }

  async sync() {
    await this.model.sync({ force: true });
    console.log(`Table for ${this.name} synchronized`);
  }
}

// Define a simple schema for the User entity
const userSchema = {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
};



// Create User entity using the schema
const User = new Entity("User", userSchema);

// Synchronize the database with the defined models.
// This will create the tables if they do not exist
// It will also create the tables with the defined schema
// it will delete the information in the table


  const synchronizedDB=()=>{
    sequelize
    .sync()
    .then(async () => {
      await User.sync();
    })
    .catch((error) => {
      console.error("Error synchronizing database:", error);
    });
  }
  synchronizedDB();



