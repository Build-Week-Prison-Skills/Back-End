// Colin and Jordan

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Prisons').del()
    .then(function () {
      // Inserts seed entries
      return knex('Prisons').insert([
        {Prison_name: 'HM Prison Thorn Cross' , Location: 'Foston, Derby DE65 5DN', available_prisoners: 0},
        {Prison_name: 'HMP Buckley Hall' , Location: 'Worcestershire, South Littleton WR11 8TZ', available_prisoners: 0},
        {Prison_name: 'HMP Altcourse' , Location: 'Eccleshall, Stafford ST21 6LQ', available_prisoners: 0},
        {Prison_name: 'HMP New Hall' , Location: 'Brookfield Dr, Liverpool L9 7LH', available_prisoners: 0},
        {Prison_name: 'HMP Long Lartin' , Location: 'Brookfield Dr, Liverpool L9 7LH', available_prisoners: 0},
        {Prison_name: 'HMP Foston Hall' , Location: 'Brookfield Dr, Liverpool L9 7LH', available_prisoners: 0}
      ]);
    });
};
