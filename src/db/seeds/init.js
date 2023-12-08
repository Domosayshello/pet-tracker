// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.seed = async (knex) => {
    // Deletes ALL existing entries (you can just use knex and delete everything)
    await knex('pets_table').del();
    // Now run your logic to create your resources with your models
    await knex('pets_table').insert([
      {id: 1, pet_name: 'hi', picture_url: 'url', species: 'dog', is_friendly: true}
    ])
  };