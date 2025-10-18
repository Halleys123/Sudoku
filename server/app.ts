import express, { Application } from 'express';

const app: Application = express();

function test(proper: number) {
  if (proper == 1) return 1;
  else return 'he';
}

test(1);

export default app;
