import db from '../../models';
import numModelData from './num-model-data';

const { Label: LabelModel } = db.sequelize.models;

const hexCode = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
];
const getRandomColor = () => {
  const colorStringLength = 6;
  const color = new Array(colorStringLength).fill().reduce((colorString) => {
    const hexIndex = parseInt(Math.random() * hexCode.length, 10);
    return colorString + hexCode[hexIndex];
  }, '');
  return color;
};

export async function up() {
  const { LABEL: nRowInLabel } = numModelData;
  const name = 'label';
  const description = 'description';
  const bulkLabel = new Array(nRowInLabel)
    .fill()
    .reduce((labels, temp, idx) => {
      const color = `#${getRandomColor()}`;
      const number = idx + 1;
      const label = {
        name: name + number,
        description: description + number,
        color,
      };
      return [...labels, label];
    }, []);
  await LabelModel.bulkCreate(bulkLabel);
}

export async function down() {
  await LabelModel.destroy({ truncate: true, cascade: true });
}
