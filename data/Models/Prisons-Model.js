const db = require('../db-Config')

module.exports = {
add,
find,
findBy,
findPrisoners,
findByID,
update,
remove
};


function remove(id) {
return db('prisons').where({id}).delete();

}

function findBy(filter){
    return db('prisons').where(filter).first();
}

function find(){
    return db ('prisons')
}

function findByID(id){
    return db ('prisons')
    .select(
        'id',
        'name',
        'location',
        'available_prisoners'

    )
    .where({id})
    .first();
}

function findPrisoners(id){
    return db ('prisons')
    .innerJoin('prisoners', function () {
        this.on('prison.id', '=', 'prisoners.prison_id')})
        .where({'prison_id': id})
}

async function add (prison) {
    const [id]= await db('prisons').insert(prison).returning('id');
    return db('prisons')
    .select('id', 'name', 'location', 'available_prisoners')
    .where({id})
    .first();
};

function update(id,changes){
    return db('prisons')
    .where({id})
    .update(changes)
    .then(_=>{
        return find(id)
    })
}

