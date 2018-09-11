module.exports = function(sequelize, DataTypes) {
  var LostAndFound = sequelize.define('LostAndFound', {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3,15]
      }
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3,15]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,s
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subcategory:{
     type: DataTypes.STRING,
      allowNull: false,
    },
    size:{
      type: DataTypes.STRING,
       allowNull: false,
     },
     color:{
      type: DataTypes.STRING,
       allowNull: false,
     },
     attribute1:{
      type: DataTypes.STRING,
       allowNull: true,
     },
     attribute2:{
      type: DataTypes.STRING,
       allowNull: true,
     },
     attribute3:{
      type: DataTypes.STRING,
       allowNull: true,
     },
     attribute4:{
      type: DataTypes.STRING,
       allowNull: true,
     },
     photo:{
      type: DataTypes.TEXT,
       allowNull: true,
     },
     location:{
      type: DataTypes.STRING,
       allowNull: false,
     },
     description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [3,160]
      }
    },
    lost: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  });

  LostAndFound.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    LostAndFound.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return LostAndFound;
};
