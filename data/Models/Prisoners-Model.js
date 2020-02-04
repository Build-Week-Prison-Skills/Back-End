const db = require('../db-Config')

module.exports = {
    add,
    find,
    remove,
    update,
    findBy,
    findById
    
};

async function add(prisoner) {
    const [id] = await db('prisoners').insert(prisoner).returning('id');
        return db('prisoners')
        .select('id', 'name', 'day_release', 'skills')
        .where({id})
        .first();
}

function find() {
 return db('prisoners');
}

function findBy(filter) {
    return db('prisoners').where(filter).first();
}

function remove (id) {
    return db('prisoners').where({id}).delete();
}

function update(id, changes) {
    return db('prisoners')
    .where({id})
    .update(changes)
    .then(_ => {
        return find(id)
    })
}

function findById(id) {
    return db('prisoners') 
        .select(
            'id',
            'name',
            'day_release',
            'skills'
        )
        .where({id})
        .first();
}