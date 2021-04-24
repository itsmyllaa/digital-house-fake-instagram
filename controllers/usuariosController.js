const bcrypt = require('bcryptjs');
const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        const usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', { listaUsuarios: usuarios });
    }, 
    login: (request, response) => {
        return response.render('login');
    }, 
    auth: async (request, response) => {
        const { email, senha } = request.body;

        const usuario = await Usuario.findOne({
            where: { email }
        });

        if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
            request.session.usuarioLogado = usuario; //criando atributo usuarioLogado na session
            return response.redirect('/'); // redirecionando para pagina inicial
        } else {
            return response.redirect('/usuarios/login');
        }
    },
    registro: (request, response) => {
        return response.render('registro');
    },
    create: async (request, response) => {
        const {nome, email, senha} = request.body;

        const senhaCrypt = bcrypt.hashSync(senha, 10);

        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha: senhaCrypt
        });

        return response.redirect('/usuarios/login');
    },
    update: async (request, response) => {
        const { id } = request.params;
        const { nome, email, senha } = request.body;

        const usuarioAtualizado = await Usuario.update({
            nome, 
            email, 
            senha
        }, {
            where: { id }
        })

        return response.send(usuarioAtualizado);
    },
    delete: async (request, response) => {
        const { id } = request.params;

        const usuarioDeconstado = await Usuario.destroy({
            where: {id}
        });

        return response.json(usuarioDeconstado);
        
    }
}

module.exports = usuariosController;