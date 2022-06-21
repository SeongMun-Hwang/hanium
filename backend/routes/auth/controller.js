const asyncHandler = require('express-async-handler');
const {createResponse} = require('../../utils/response')
exports.hello = asyncHandler(async (req, res) => {
  res.json(createResponse(res, 'hello'));
})

