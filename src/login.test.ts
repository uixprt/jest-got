import faker from 'faker';
import got from 'got';
import process from 'process';

import {tryCatchRequest} from './utils';

const api = `${process.env.API_PROTOCOL}://${process.env.API_DOMAIN}/api/user/v3/`

it('login - wrong credentials', async () => {
  const {response, success} = await tryCatchRequest(() =>
    got({
      method: 'POST',
      url: `${api}tokens/`,
      json: {
        username: faker.internet.userName(),
        password: faker.internet.password(),
      },
      responseType: 'json',
    })
  );
  
  expect(success).toEqual(false);
  expect(response.status).toEqual(401);
  expect(response.data.code).toEqual('ERROR_AUTH_WRONG_CREDENTIALS');
  expect(response.data.message).toEqual('Wrong credentials');
});
