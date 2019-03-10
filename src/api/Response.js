class Response {

  constructor() {
    this.format = this.format.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  format(payload, key, extraData = false) {
    const response = payload.data;
    let result = {
      data: extraData ? [] : null,
      errors: response.errors,
    };
    if (extraData) { result.extra = null; }
    if (response.data && response.data[key]) {
      result.data = (extraData) ?
        response.data[key].data :
        response.data[key];
      if (extraData) {
        delete payload.data.data[key].data;
        result.extra = payload.data.data[key];
      }
    }
    return result;
  }

  loadMore(payload, key) {
    const response = payload.data;
    let result = {
      data: [],
      errors: response.errors,
    };
    if (response.data && response.data[key]) {
      result.data = response.data[key];
    }
    return result;
  }
}

export default new Response();