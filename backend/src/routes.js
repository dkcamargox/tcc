//REQUISIÇÕES
const express = require('express');
const routes = express.Router();
const ClientController = require('./controllers/ClientController');
const AnnouncementController = require('./controllers/AnnouncementController');

//ROTA RAIZ
routes.get('/', (req, res)=>{
    return res.json({
        mensagem: "tela inicial socorro"
    });
});

//ROTAS CLIENT
routes.post('/client', ClientController.create);
routes.get('/client', ClientController.index);
//routes.post('/client/settings', ClientController.update);
routes.delete('/client/settings/delete:id', ClientController.delete);


//ROTAS ANNOUNCEMENTS
routes.post('/announcements', AnnouncementController.create);
routes.get('/announcements', AnnouncementController.index);
routes.delete('/announcements/:id', AnnouncementController.delete);
//routes.put('announcements/settings/:id', AnnouncementController.update);
routes.put('announcements/settings/:id', AnnouncementController.update);



module.exports = routes;