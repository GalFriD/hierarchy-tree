import { encode } from '../../Utils';
import { NetworkService } from '../NetworkService';

export const ERRORS = {
  UNAUTHORIZED: 'Unauthorized',
};

async function authenticate(email: string, password: string) {
  const encoded = encode(email, password);
  const secrets = await NetworkService.getSecrets();

  if (secrets[encoded]) {
    return secrets[encoded];
  }

  throw ERRORS.UNAUTHORIZED;
}

const authService = {
  authenticate,
};

export default authService;
