
exports.up = function(knex) {
    knex.schema.createTable("meetings", table => {
        table.increments(); 
        table.string('name').notNullable(); 
        table.string('location'); 
        table.text('description', 255); 
        table.datetime('start').notNullable(); 
        table.datetime('end').notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    knex.schema.dropTableIfExists("meetings");
};
