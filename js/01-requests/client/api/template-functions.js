const baseUrl = "http://localhost:3000/users";

/**
 * @desc Gets all users
 * @route /users
 * @method GET
 */
const getAll = async () => {};

/**
 * @desc Gey by id
 * @route /users/:id
 * @method GET
 */
const getById = async (id) => {};

/**
 * @desc Creates a user
 * @route /users
 * @method POST
 */
const create = async (payload) => {};

/**
 * @desc Updates a user
 * @route /users/:id
 * @method PUT
 */
const update = async (id, payload) => {};

/**
 * @desc Removes a user
 * @route /users/:id
 * @method DELETE
 */
const remove = async () => {};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
