import { all } from 'redux-saga/effects';
import { sagas as feedSagas } from '@mfeao/feed';

export default function* sagas() {
  yield all([
    ...feedSagas,
  ]);
}
