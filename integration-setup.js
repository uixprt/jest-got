import fs from 'fs';

module.exports = async () => {
  require('dotenv').config();

  const data = '';

  let state = JSON.stringify({ data });

  fs.writeFileSync('./fixtures/state.json', state);
};
