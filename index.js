const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const FILE_PATH = './data.json';

const makeCommit = n => {
  if (n === 0) return simpleGit().push();

  const x = Math.floor(Math.random() * 50); // Random integer between 0 and 54
  const y = Math.floor(Math.random() * 7);  // Random integer between 0 and 6
  const DATE = moment().subtract(1, 'm').add(1, 'd')
    .add(x, 'w').add(y, 'd').format();

  const data = { date: DATE };
  console.log(DATE);

  jsonfile.writeFile(FILE_PATH, data, (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return;
    }
    simpleGit().add([FILE_PATH]).commit(DATE, {'--date': DATE },
      () => makeCommit(n - 1));
  });
}

makeCommit(20);
