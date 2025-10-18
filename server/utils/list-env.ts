import dotenv from 'dotenv';

const NODE_ENV: string = process.env.NODE_ENV || 'production';

console.log('Working in', NODE_ENV, 'mode.');

dotenv.config({
  path: `.${NODE_ENV}.env`,
  quiet: true,
});
