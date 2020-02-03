// Colin and Jordan
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Staff').del()
    .then(function () {
      // Inserts seed entries
      return knex('Staff').insert([
        {UserName:'LJenkins', Password: 'Password', Prison_id: '1' },
        {UserName:'KCumwut', Password: 'Password', Prison_id: '2' },
        {UserName:'HEnfiled', Password: 'Password', Prison_id: '4' },
        {UserName:'JCan', Password: 'Password', Prison_id: '3' },
        {UserName:'FGump', Password: 'Password', Prison_id: '5' },
        {UserName:'BBubba', Password: 'Password', Prison_id: '6' },
        
      ]);
    });
};
