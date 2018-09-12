module.exports = function (sequelize, DataTypes) {
  var Claim = sequelize.define('Claim', {
    LostItem_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FoundItem_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  // add foreign keys 
  return Claim;
};
