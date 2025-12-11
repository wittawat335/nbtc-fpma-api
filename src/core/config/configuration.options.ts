import { ConfigModuleOptions } from '@nestjs/config';
import configuration from './configuration';
import validationSchema from './validation';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [configuration],
  envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
  validationSchema: validationSchema,
};
