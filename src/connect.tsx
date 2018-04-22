import hoistNonReactStatics from 'hoist-non-react-statics';
import createContext from 'create-react-context';
import * as React from 'react';
import { FormikContext } from './types';

export const {
  Provider: FormikProvider,
  Consumer: FormikConsumer,
} = createContext<FormikContext<any>>({} as any);

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */
export function connect<OuterProps, Values = {}>(
  Comp: React.ComponentType<OuterProps & { formik: FormikContext<Values> }>
) {
  const C = (props: OuterProps) => (
    <FormikConsumer>
      {formik => <Comp {...props} formik={formik} />}
    </FormikConsumer>
  );

  return hoistNonReactStatics<
    OuterProps,
    OuterProps & { formik: FormikContext<Values> }
  >(
    C,
    Comp as React.ComponentClass<OuterProps & { formik: FormikContext<Values> }> // cast type to ComponentClass (even if SFC)
  ) as React.ComponentClass<OuterProps>;
}
