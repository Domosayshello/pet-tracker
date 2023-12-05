const knex = require('./knex');

class Pet {
  

  static async create(data) {
    try {
      const query = `INSERT INTO examples (data) values (?) returning *`;
      const { rows: [newToDo] } = await knex.raw(query, [data]);
      return newToDo;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}



module.exports = Pet;