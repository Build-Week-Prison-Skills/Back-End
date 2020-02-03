const db = require('../db-Config')

module.exports = {
add
};

//register 
async function add(Staff) {
    const [id] = await db('Staff').insert(Staff).returning('id');
        return db('Staff')
        .select('id', 'UserName', 'Password', 'Prison_id')
        .where({id})
        .first();
}