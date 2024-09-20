const knex = require('./knex');

class Pet {
  static async list() {
    try{
      const query = `SELECT * FROM pets_table`;
      const res = await knex.raw(query)
      console.log(res)
      return res.rows;
    } catch (err){
      console.error(err);
      return null;
    }
  }

  static async create(name, picture_url, species, is_friendly) {
    try {
      const query = `INSERT INTO pets_table (pet_name, picture_url, species, is_friendly) values (?, ?, ?, ?) RETURNING *`;
      const { rows: [newPet] } = await knex.raw(query, [name, picture_url, species, is_friendly]);
      return newPet;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const query = `DELETE FROM pets_table WHERE id = ?`;
      const { rows } = await knex.raw(query, [id]);
      return null;
    } catch {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pet;