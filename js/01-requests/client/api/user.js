export class User {
  constructor() {
    this.baseUrl = "";
  }

  /**
   * @desc Gets all users
   * @route /users
   * @method GET
   */
  async getAll() {}

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
   * @desc Deletes a user
   * @route /users/:id
   * @method DELETE
   */
  async delete(id) {}
}
