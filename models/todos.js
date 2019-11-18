// create a model for our task

// exporting this model to our index
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define("Taskes", {
    //   define columns of our table
    title: { type: DataTypes.STRING },
    taskItem: { type: DataTypes.STRING }
  });
  return Task;
};
