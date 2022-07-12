const route = require('express').Router();
const characterController = require('../controllers/character.controller');
const {
  validId,
  validObjectBody,
} = require('../middlewares/character.middleware');

route.get('/characters', characterController.FindAllCharacterController);
route.get(
  '/find/:id',
  validId,
  characterController.FindByIdCharacterController,
);
route.post(
  '/create',
  validObjectBody,
  characterController.createCharacterController,
);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  characterController.updateCharacterController,
);
route.delete(
  '/delete/:id',
  validId,
  characterController.deleteCharacterController,
);

module.exports = route;
