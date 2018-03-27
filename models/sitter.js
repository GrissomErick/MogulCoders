module.exports = function (sequelize, DataTypes) {
    const Sitter = sequelize.define("Sitters", {
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        zip: DataTypes.STRING,

    });
    return Sitter;
};