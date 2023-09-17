import httpStatus from 'http-status';
import { RequestError } from '@/protocols';

export function cepRequestError(): RequestError {
  return {
    name: 'BadRequestError',
    data: null,
    status: httpStatus.BAD_REQUEST,
    statusText: 'Bad Request',
    message: 'Invalid cep!',
  };
}
