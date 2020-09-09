const db = require('../data/connection')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
   return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id }).first()
                
}

function findSteps(id) {
    return(
        db.select('steps.id', 'steps.step_number', 'steps.instructions', 'schemes.scheme_name')
            .from('steps')
            .join('schemes', 'steps.scheme_id', '=', 'schemes.id')
            .where({ scheme_id: id })
         
    )
}

function add(newScheme) {
    return(
        db('schemes')
            .insert(newScheme)
    )
}

function update(changes,id) {
    return (
        db('schemes')
            .update(changes)
            .where({ id })
    )
}

function remove(id) {
    return (
        db('schemes')
            .delete()
            .where({ id })
    )
}