const Sequelize = require('sequelize');

module.exports = (sequelize) => {
 class Person extends Sequelize.Model {}
    Person.init({
       firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
              msg: 'ahhhh! No first name entered. 😿',
          },
          notEmpty: {
              msg: 'ahhhh! No first name entered. 😿'
          },
        },
      },
     lastName: {
       type: Sequelize.STRING,
         allowNull: false,
         validate: {
          notNull: {
              msg:'ahhhh! No last name entered. 😿',
          },
          notEmpty: {
              msg: 'ahhhh! No first name entered. 😿'
        },
      },
    },
  },  { sequelize });

    return Person;
};