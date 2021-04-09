import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const logLevel = process.env.LOG_LEVEL || 'warning';
if (logLevel === 'debug' || logLevel === 'info') {
  // eslint-disable-next-line no-console
  console.log(result.parsed);
}
