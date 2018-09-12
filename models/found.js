module.exports = function(sequelize, DataTypes) {
  var Found = sequelize.define('Found', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subcategory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [3, 400]
      }
    },
    claimed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Found.associate = function(models) {
    Found.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Found;
};
