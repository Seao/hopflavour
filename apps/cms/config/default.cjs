const configuration = {
  modules: {
    // apostrophe modules
    '@apostrophecms/db': {
      options: {
        uri: `${process.env.MONGODB_PROTOCOL || 'mongodb://'}${process.env.MONGODB_CREDENTIALS ? process.env.MONGODB_CREDENTIALS + '@' : ''}${process.env.MONGODB || '127.0.0.1:27017/test-project-a2'}${process.env.MONGODB_READ_PREFERENCE || ''}`,
      },
    },
    '@apostrophecms/rich-text-widget': {
      options: {
        className: 'hopflavour-rich-text'
      }
    },
    '@apostrophecms/image-widget': {
      options: {
        className: 'hopflavour-image-widget'
      }
    },
    '@apostrophecms/video-widget': {
      options: {
        className: 'hopflavour-video-widget'
      }
    },
    // dgad modules (assets)
    '@hopflavour/asset': {}
  }
}

module.exports = configuration
