import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';

declare const module: any;
const allowlist = ['http://localhost:4201', 'http://localhost:4200', 'https://quiet-medovik-e0ff03.netlify.app'];
const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptionsDelegate);
  await app
    .listen(process.env.PORT, '0.0.0.0')
    .then((value) => {
      console.log('App has started in ', process.env.PORT);
    })
    .catch((err) => console.log('Error occur', err));
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
