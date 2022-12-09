import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  async registration(registrationDTO) {
    return registrationDTO;
  }
}
