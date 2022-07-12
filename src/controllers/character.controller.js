const characterService = require('../services/character.service');

const FindAllCharacterController = async (req, res) => {
  const characters = await characterService.FindAllCharacterService();
  if (characters.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum personagem cadastrado ' });
  }
  res.send(characters);
};

const FindByIdCharacterController = async (req, res) => {
  const idParam = req.params.id;

  const chosenCharacter = await characterService.FindByIdCharacterService(
    idParam,
  );
  if (!chosenCharacter) {
    return res.status(400).send({ message: 'Personagem não existe' });
  }
  res.send(chosenCharacter);
};

const createCharacterController = async (req, res) => {
  const character = req.body;

  const newCharacter = await characterService.createCharacterService(character);
  res.status(201).send(newCharacter);
};

const updateCharacterController = async (req, res) => {
  const idparam = req.params.id;
  const characterEdit = req.body;
  const updateCharacter = await characterService.updateCharacterService(
    idparam,
    characterEdit,
  );
  res.send(updateCharacter);
};

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = await characterService.deleteCharacterService(
    idParam,
  );

  if (!chosenCharacter) {
    return res.status(400).send({ message: 'Personagem não Encontrado' });
  }
  res.send({ message: 'Personagem deletado com Sucesso' });
};

module.exports = {
  FindAllCharacterController,
  FindByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
};
