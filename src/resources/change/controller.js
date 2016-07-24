import { sequelize } from '../../db';
import Change from './model';
import Like from '../likes/model';
import moment from 'moment';

function* getChange() {
  const changes = yield Change.findAll({
    order: 'id ASC',
    attributes: { include: [[sequelize.fn('count', sequelize.col('likes.id')), 'likecount']] },
    include: [{ attributes: [], model: Like }],
    group: ['change.id']
  });
  this.status = 200;
  this.body = {
    changes
  };
}

function* likeChange() {
  // TODO: check IP and block unreasonably frequent requests from the same ip
  // console.log(this.req.connection.socket.remoteAddress);
  // const mostRecentLike = yield Like.findOne({
  //   where: {
  //     ip: this.request.id,
  //     changeId: this.params.id
  //   },
  //   order: 'createdAt DESC'
  // });
  //
  // if (mostRecentLike && moment.duration(mostRecentLike.createdAt).hours() < 1) {
  //   this.status = 400;
  //   this.body = 'too recent';
  // }

  const like = yield Like.create();
  const change = yield Change.findById(this.params.id, {
    attributes: { include: [[sequelize.fn('count', sequelize.col('likes.id')), 'likecount']] },
    include: [{ attributes: [], model: Like }],
    group: ['change.id']
  });
  yield like.setChange(change);
  const updpatedChange = yield Change.findById(this.params.id, {
    attributes: { include: [[sequelize.fn('count', sequelize.col('likes.id')), 'likecount']] },
    include: [{ attributes: [], model: Like }],
    group: ['change.id']
  });

  this.status = 200;
  this.body = { change: updpatedChange };
}

function* createChange() {
  console.log(this.request.body);
  yield Change.create({ ...this.request.body, id: this.params.id });
  this.status = 201;
  this.body = {
    name: 'user',
    info: 'API Docs URL'
  };
}

function* deleteChange() {
  console.log(this.request.body);
  yield Change.findById(this.params.id).then((change) => change && change.destroy());
  this.status = 200;
  this.body = 'deleted';
}

export default { getChange, createChange, deleteChange, likeChange };
