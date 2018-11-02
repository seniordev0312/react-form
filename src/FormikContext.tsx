import * as React from 'react';
import { FormikCtx } from './types';

const PrivateFormikContext = React.createContext<FormikCtx<any>>({} as any);
export const FormikProvider = PrivateFormikContext.Provider;
export const FormikConsumer = PrivateFormikContext.Consumer;

export function useFormikContext<Values>() {
  return React.useContext<FormikCtx<Values>>(PrivateFormikContext);
}
