const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
  };
  
  function find() {
    return db('schemes');
  }
  function findById(id) {
    return db('schemes')
    .where({ id });
  }
  
  function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(res => find())
  }
  
  function findSteps(id) {
    return db('steps')
      .innerJoin('schemes', 'steps.scheme_id', '=', 'schemes.id')
      .select('schemes.scheme_name', 'steps.step_number')
      .where({scheme_id: id });
  }
  
  function update(id, changes) {
    return db('schemes')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('schemes')
      .where({ id })
      .del();
  }
  