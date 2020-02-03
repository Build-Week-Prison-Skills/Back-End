
// Colin and Jordan
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Prisoners').del()
    .then(function () {
      // Inserts seed entries
      return knex('Prisoners').insert([
        {Name: 'Chris Cliffe', day_release: true, skills: 'Plumbing, Tiling, BrickWork, Woodwork', Prison_id: 1},
        {Name: 'Colin Toft', day_release: false, skills: 'Plumbing, Tiling, BrickWork', Prison_id: 2},
        {Name: 'Ben Beam', day_release: true, skills: 'Plumbing, Tiling', Prison_id: 3},
        {Name: 'Jack Daniels', day_release: false, skills: 'Plumbing, BrickWork, Woodwork', Prison_id: 4},
        {Name: 'Luke Smith ', day_release: true, skills: 'Plumbing', Prison_id: 5},
        {Name: 'Dave Walsh', day_release: false, skills: 'Woodwork', Prison_id: 6},
       
        
      ]);
    });
};
