import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { options } from './utils/swagger-option.js';

const app = express();

const port = 3000;

const specs = swaggerJSDoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (_, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
