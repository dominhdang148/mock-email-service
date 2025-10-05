export const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Mock email services',
      version: '0.1.0',
      description:
        'This is a simple Mailing API application made with Express and documented with Swagger',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Dang Do Minh',
        url: 'https://github.com/dominhdang148',
        email: 'myclone235@email.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};
