class User {
  constructor() {
    this.baseUrl = "http://localhost:3000/users";
  }

  /**
   * @desc Gets all users
   * @route /users
   * @method GET
   */
  async getAll() {}

  /**
   * @desc Get user by id
   * @route /users/:id
   * @method GET
   */
  async getById() {}

  /**
   * @desc Creates a user
   * @route /users
   * @method POST
   */
  async create(payload) {}

  /**
   * @desc Updates a user
   * @route /users/:id
   * @method PUT
   */
  async update(id, payload) {}

  /**
   * @desc Removes a user
   * @route /users/:id
   * @method DELETE
   */
  async remove(id) {}
}

export default new User();
