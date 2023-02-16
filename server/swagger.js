const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


const options = {
  apis: ['./src/routes/routeUsers.js', './src/dao/schemas/users.js'],
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'FITHOUSE APP',
      version: '0.0.9',
      description: 'API para ejercicios en casa'
    }
  }
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get('api/v1/docs.json', (req, res) => {
    res.setHeader({ 'Content-Type': 'application/json' });
    res.send(swaggerSpec)
  });
  console.log(`la documentacion esta disponible en localhost:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;