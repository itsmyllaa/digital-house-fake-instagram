module.exports = (sequelize, DataTypes) => {

    //define(nomeModel, colunas, config)
    const Usuario = sequelize.define(
        'Usuario', {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    // Relação 1:N (1 usuário com vários posts)
    // Usuario.associate = (models) => {
    //     Usuario.hasMany(models.Post, {
    //         as: "posts",
    //         foreignKey: "usuarios_id"
    //     });
    // };

    return Usuario;
};