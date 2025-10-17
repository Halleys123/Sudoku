import dotenv from 'dotenv';

let NODE_ENV = process.env.NODE_ENV || 'production';

console.log('Working in', NODE_ENV, 'mode.');

dotenv.config({
  path: `.${NODE_ENV}.env`,
  quiet: true,
});
