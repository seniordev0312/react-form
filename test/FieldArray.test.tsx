import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FieldArray } from '../src/FieldArray';
import { Formik } from '../src/formik';
import { isFunction } from '../src/utils';

// tslint:disable-next-line:no-empty
const noop = () => {};

const TestForm: React.SFC<any> = p => (
  <Formik
    onSubmit={noop}
    initialValues={{ friends: ['jared', 'andrea', 'brent'] }}
    {...p}
  />
);

describe('<FieldArray />', () => {
  const node = document.createElement('div');

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(node);
  });

  it('it passes down array helpers as props', () => {
    ReactDOM.render(
      <TestForm
        render={() => (
          <FieldArray
            name="friends"
            render={arrayProps => {
              expect(isFunction(arrayProps.push)).toBeTruthy();
              return null;
            }}
          />
        )}
      />,
      node
    );
  });

  describe('props.push()', () => {
    it('should add a value to the end of the field array', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      arrayHelpers.push('jared');
      const expected = ['jared', 'andrea', 'brent', 'jared'];
      expect(formikBag.values.friends).toEqual(expected);
    });
  });

  describe('props.pop()', () => {
    it('should remove and return the last value from the field array', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      const el = arrayHelpers.pop();
      const expected = ['jared', 'andrea'];
      expect(formikBag.values.friends).toEqual(expected);
      expect(el).toEqual('brent');
    });
  });

  describe('props.swap()', () => {
    it('should swap two values in field array', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      arrayHelpers.swap(0, 2);
      const expected = ['brent', 'andrea', 'jared'];
      expect(formikBag.values.friends).toEqual(expected);
    });
  });

  describe('props.insert()', () => {
    it('should insert a value at given index of field array', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      arrayHelpers.insert(1, 'brian');
      const expected = ['jared', 'brian', 'andrea', 'brent'];
      expect(formikBag.values.friends).toEqual(expected);
    });
  });

  describe('props.unshift()', () => {
    it('should add a value to start of field array and return its length', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      const el = arrayHelpers.unshift('brian');
      const expected = ['brian', 'jared', 'andrea', 'brent'];
      expect(formikBag.values.friends).toEqual(expected);
      expect(el).toEqual(4);
    });
  });

  describe('props.remove()', () => {
    it('should remove a value at given index of field array', () => {
      let formikBag: any;
      let arrayHelpers: any;
      ReactDOM.render(
        <TestForm
          render={(props: any) => {
            formikBag = props;
            return (
              <FieldArray
                name="friends"
                render={arrayProps => {
                  arrayHelpers = arrayProps;
                  return null;
                }}
              />
            );
          }}
        />,
        node
      );

      arrayHelpers.remove(1);
      const expected = ['jared', 'brent'];
      expect(formikBag.values.friends).toEqual(expected);
    });
  });
});
