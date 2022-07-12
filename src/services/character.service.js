const Characters = require('../models/character');

const FindAllCharacterService = async () => {
  const allCharacters = await Characters.find();
  return allCharacters;
};

const FindByIdCharacterService = async (id) => {
  const oneCharacter = await Characters.findById(id);
  return oneCharacter;
};

const createCharacterService = async (newCharacter) => {
  const createdCharacter = await Characters.create(newCharacter);
  return createdCharacter;
};

const updateCharacterService = async (id, characteredited) => {
  const updateCharacter = await Characters.findByIdAndUpdate(
    id,
    characteredited,
  ).setOptions({ returnOriginal: false });
  return updateCharacter;
};

const deleteCharacterService = async (id) => {
  return await Characters.findByIdAndDelete(id);
};
module.exports = {
  FindAllCharacterService,
  FindByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
};
