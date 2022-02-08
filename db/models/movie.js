const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Movie extends Sequelize.Model {}
    Movie.init({
     title: {
       type: Sequelize.STRING,
       allowNull: false, // disallow null
       vaildate: {  
         notNull: { 
           msg: 'ahhhhhh NO TITLE❌',
         },
         notEmpty: { 
          // custom error message
          msg: 'ahhhhhh NO TITLE❌!',
         },
        },
       },
     runtime: {
       type: Sequelize.INTEGER,
       allowNull: false, // disallow null
       vaildate: { 
         min: { 
           args: 1,
           msg: 'Please provide a value greater than "0" for "runtime"❌!',
          },
         notNull: {
           msg: 'ahhhhhh NO RUNTIME❌!',
         }
        },
       },
     releaseDate: {
       type: Sequelize.DATEONLY, // date value accepted (yyyy-mm-dd)
       allowNull: false,
       validate: { 
         isAfter: { 
           args: '1895-12-27',
           msg: 'Please provide a value on or after "1895-12-28" for "releaseDate"❌',
         },
         notNull: {
          msg: 'ahhhhhh NO RELEASE DATE❌!',
         } 
        },
       },
     isAvailableOnVHS: {
       type: Sequelize.BOOLEAN,
       allowNull: false, // disallow null
       defaultValue: false
       },
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
       }
    }, 
    
    { 
      paranoid: true,
      // tableName: 'my_movies_table', // * table name change
      // modelName: 'movie', // * set model name to 'movie'; table name will be 'movies'
      // freezeTableName: false, // * disable plural table names
      timestamps: true, // * disable timestamps
      sequelize 
    
    });
  
    return Movie;
  };