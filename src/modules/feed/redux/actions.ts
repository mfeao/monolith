import { createAsyncAction } from '~/helpers/redux';

const namespace = '@@FEED';

export const getPosts = createAsyncAction(`${namespace}/REQUEST_POSTS`);
