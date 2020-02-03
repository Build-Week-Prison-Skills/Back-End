const db = require('../db-Config')

module.exports = {
    add,
    find
    
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