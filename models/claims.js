module.exports = function (sequelize, DataTypes) {
  var Claim = sequelize.define('Claim', {
    LostItem_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    LostItem_User: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FoundItem_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FoundItem_User: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Claim.associate = function (models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   LostAndFound.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  };

  return Claim;
};
