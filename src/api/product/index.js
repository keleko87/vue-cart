import request from "./../request";

export default {
  findAll() {
    return request.get("/products");
  }
};
