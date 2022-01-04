import faker from 'faker';
import got from 'got';

import { tryCatchRequest } from './utils';

it('login - wrong credentials', async () => {
    const { response, success } = await tryCatchRequest(() =>
        got({
            method: 'POST',
            url: 'https://api.qa.proftit.com/api/user/v3/tokens/',
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
