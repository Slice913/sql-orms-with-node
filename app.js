const db = require('./db');
const { Movie, Person } = db.models;
const { Op } = db.Sequelize;

(async () => {
  await db.sequelize.sync({ force: true });

  try {

    const movie = await Movie.create({
      title: 'Get Hard',
      runtime: 81 ,
      releaseDate: '1995-11-22' ,
      isAvaliableOnVhs: true,
    });
   // console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnVHS: true,
    });
   // console.log(movie2.toJSON());

    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnVHS: false,
    });
    await movie3.save();
    // console.log(movie3.toJSON());
    
    const person = await Person.create({
      firstName: 'Richard',
      lastName: 'Ayoade',
    });
    // console.log(person.toJSON());

    const movieById = await Movie.findByPk(3);
    // console.log(movieById.toJSON());
    
    const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    // console.log(movieByRuntime.toJSON());

   /**  const movies = await Movie.findAll( { 
      attributes: ['id', 'title', 'releaseDate'], 
      where: { 
        releaseDate: {
          [Op.gte]: '1995-01-01',
        },
        runtime: {
          [Op.between]: [ 75, 115 ]
        },
        title: {
          // *  return all movies with a title that ends with 'story' in descending order by ID.
          [Op.endsWith]: 'hard',
        },
       },
       order: [['releaseDate', 'ASC']],
    }); */

    const toyStory3 = await Movie.findByPk(3);
    await toyStory3.update({ 
      isAvailableOnVHS: true,
      title: 'Trinket Tale 3',
    }, { fields: [ 'title','isAvailableOnVHS' ], });

  // console.log( toyStory3.get({ plain: true }) );

   const getHard = await Movie.findByPk(1);

   await getHard.destroy();

  const movies = await Movie.findAll();
  console.log(movies.map(movie => movie.toJSON()) );
    
  } catch (error) {
    if (error.name === 'SequelizeValidationError'){
     const errors =  error.errors.map(err => err.message);
     console.error('Vaildation errors: ',errors);
    } else {
      throw error;
    }
  }
})();

// start at "Update a Record".

