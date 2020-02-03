//colin and jordan 
const db = require('../db-Config')

module.exports = {
add,
findBy
};

//register 
async function add(Staff) {
    const [id] = await db('Staff').insert(Staff).returning('id');
        return db('Staff')
        .select('id', 'UserName', 'Password', 'Prison_id')
        .where({id})
        .first();
}

function findBy(filter) {
    return db('Staff').where(filter).first();
}