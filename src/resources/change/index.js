import controller from './controller';
import router from 'koa-router';

const changeRouter = router();
changeRouter.get('/', controller.getChange);
changeRouter.post('/:id/like', controller.likeChange);
// changeRouter.post('/:id', controller.createChange);
// changeRouter.delete('/:id', controller.deleteChange);

export default changeRouter.routes();
