// jordan and collin 
exports.up = function(knex, Promise) {
    return knex.schema
            .createTable('Staff', table => {
                table.increments();
                table.string('UserName', 128).notNullable().unique();
                table.string('Password').notNullable();
                table
                    .integer('Prison_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('Prisons')
                    .onDelete('RESTRICT')
                    .onUpdate('CASCADE')
            })
            .createTable('Prisons', table => {
                table.increments();
                table.string('Prison_Name', 128).notNullable().unique();
                table.string('Location', 128).notNullable();
                table.integer('available_prisoners').notNullable();
        
            })
            .createTable('Prisoners', table => {
                table.increments();
                table.string('Name', 128).notNullable();
                table
                    .integer('Prison_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('Prisons')
                    .onDelete('RESTRICT')
                    .onUpdate('CASCADE');
                table.boolean('day_release').defaultTo(false);
                table.string('skills', 500).notNullable();

            })

  
};

exports.down = function(knex, Promise) {
return knex.schema
    .dropTableIfExists('Staff')
    .dropTableIfExists('Prisons')
    .dropTableIfExists('Prisoners')
  
};
