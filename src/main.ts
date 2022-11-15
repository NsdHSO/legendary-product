import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;
const allowlist = ['http://localhost:4201'];
const corsOptionsDelegate = function(req, callback) {
  let corsOptions;
  if(allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  }
  else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptionsDelegate);
  await app.listen(3001);
  if(module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
