module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
        len: [3, 15]
      }
    },
    lastname: {
      type: DataTypes.TEXT,
      notEmpty: true,
      validate: {
        len: [3, 15]
      }
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3, 15]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 15]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    last_login: {
      type: DataTypes.DATE
    }
    // },
    // status: {
    //   type: sequelize.ENUM('active','inactive'),
    //   defaultValue:'active'
    // }
  });

  // User.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   User.hasMany(models.Lost, {
  //     onDelete: 'cascade'
  //   });
  //   User.hasMany(models.Found, {
  //     onDelete: 'cascade'
  //   });
  // };

  return User;
};
