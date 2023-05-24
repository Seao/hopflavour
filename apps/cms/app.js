const config = require('config')

require('apostrophe')({
  shortName: 'hopflavour',
  port: process.env.CMS_PORT,
  baseUrl: process.env.CMS_URL,
  modules: config.get('modules')
})
