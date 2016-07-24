function* getUser(next) {
  this.status = 200;
  this.body = {
    name: 'user',
    info: 'API Docs URL'
  };
}

export default { getUser };
