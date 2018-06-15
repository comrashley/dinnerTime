const router = require('express').Router()
const axios = require('axios')

router.get('/:time/:ingredients', async (req, res, next) => {
  console.log('server', req.params.time, req.params.ingredients)
  const {data} = await axios.get(
    `http://api.yummly.com/v1/api/recipes?_app_id=bf40c06b&_app_key=06af4acb0120b72bd169cc0bcf45b1d3&q=${
      req.params.ingredients
    }&maxTotalTimeInSeconds=${req.params.time}&requirePictures=true`
  )
  res.json(data)
})

router.get('/:time/', async (req, res, next) => {
  console.log('server', req.params.time, req.params.ingredients)
  const {data} = await axios.get(
    `http://api.yummly.com/v1/api/recipes?_app_id=bf40c06b&_app_key=06af4acb0120b72bd169cc0bcf45b1d3&maxTotalTimeInSeconds=${
      req.params.time
    }`
  )
  res.json(data)
})

module.exports = router
