'use strict';

import controller from './user.controller';
import router from 'koa-router';

const userRouter = router();
userRouter.get('/', controller.getUser);

export default userRouter.routes();
