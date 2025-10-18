import '@utils/list-env.js';
import env from '@utils/get-env.js';

import app from './app.js';

app.listen(env.PORT, (): void => {
  console.log('Listening on', env.PORT);
});
