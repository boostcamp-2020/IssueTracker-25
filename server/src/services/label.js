import labelDummy from './dummy/label';

function getLabelList(req, res) {
  res.json(labelDummy);
}
export default getLabelList;
