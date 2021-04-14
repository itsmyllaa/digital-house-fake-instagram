module.exports = (sequelize, DataTypes) => {

    //define(nomeModel, colunas, config)
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            n_likes: DataTypes.INTEGER
        }, {
            tableName: "posts",
            timestamps: false
        }
    );

    //Relação N:1 (vários posts de 1 usuário)
    // Post.associate = (models) => {
    //     Post.belongsTo(models.Usuario, {
    //         as: "usuario",
    //         foreignKey: "usuarios_id"
    //     });

    //     // Relação 1:N (1 post com vários comentarios)
    //     Post.hasMany(models.Comentario, {
    //         as: "comentarios",
    //         foreignKey: "posts_id"
    //     });

    //     // Relação N:M (1 post com curtidas de vários usuários)
    //     Post.belongsToMany(models.Usuario, {
    //         as: "curtiu",
    //         through: "curtidas",
    //         foreignKey: "posts_id",
    //         otherKey: "usuarios_id",
    //         timestamps: false
    //     });
    // };
    
    return Post;
};