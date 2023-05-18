import { all } from 'redux-saga/effects';
import { feedSagas } from '~/modules/feed/redux';

export default function* sagas() {
  yield all([
    ...feedSagas,
  ]);
}
