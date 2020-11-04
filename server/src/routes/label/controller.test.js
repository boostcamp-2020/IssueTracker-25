import LabelService from '../../services/label';
import LabelController from './controller';

test('readList를 호출하였을 경우 응답 코드 200으로 list형태의 json을 반환한다.', async () => {
  const desiredLabelList = [{ id: 1 }, { id: 2 }];
  const LabelModel = {
    findAll() {
      return Promise.resolve(desiredLabelList);
    },
  };
  const res = {
    status() {
      return {
        json(target) {
          return JSON.stringify(target);
        },
      };
    },
  };
  const labelController = LabelController(LabelService({ LabelModel }));
  const response = await labelController.readList(undefined, res, undefined);
  expect(response).toBe(JSON.stringify(desiredLabelList));
});
