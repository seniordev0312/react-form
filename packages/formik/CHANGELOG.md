# formik

## 2.2.3

### Patch Changes

- [`e0a28e6`](https://github.com/formium/formik/commit/e0a28e6872ebfd06e636aac84829b60d704b0694) [#2867](https://github.com/formium/formik/pull/2867) Thanks [@umidbekkarimov](https://github.com/umidbekkarimov)! - Fix low priority validation for browser password autofill.

* [`958d67c`](https://github.com/formium/formik/commit/958d67ca2c3e006031c31150ea0a42248b28ffc7) [#2874](https://github.com/formium/formik/pull/2874) Thanks [@maddhruv](https://github.com/maddhruv)! - fix FastField initial value when input type is radio or checkbox

## 2.2.2

### Patch Changes

- [`00f95ec`](https://github.com/formium/formik/commit/00f95ec4ec5266eed8ad4e97b76321205c704d51) [#2854](https://github.com/formium/formik/pull/2854) Thanks [@umidbekkarimov](https://github.com/umidbekkarimov)! - Fix low priority validation race condition.

## 2.2.1

### Patch Changes

- [`e04886d`](https://github.com/formium/formik/commit/e04886db15c7e9b96516b4bd5a1b89d0e895bb7d) [#2820](https://github.com/formium/formik/pull/2820) Thanks [@wellyshen](https://github.com/wellyshen)! - Fixed bug with scheduler and `validateFormWithLowPriority` method not be scheduled correctly

## 2.2.0

### Minor Changes

- [`4148181`](https://github.com/formium/formik/commit/41481819f9187de79c4d948aeaa4ca1d33c53ed7) [#2794](https://github.com/formium/formik/pull/2794) Thanks [@jaredpalmer](https://github.com/jaredpalmer)! - `setValue` can now optionally accept a function as a callback, exposing `React.SetStateAction` functionality. Previously, only the entire object was
  allowed which caused issues with stale props.

  ```tsx
  setValues(prevValues => ({...prevValues, ... }))
  ```

## 2.1.7

### Patch Changes

- [`bda9f41`](https://github.com/formium/formik/commit/bda9f41931fac382eec26b4f1283b881b6bbc240) [#2785](https://github.com/formium/formik/pull/2785) Thanks [@jaredpalmer](https://github.com/jaredpalmer)! - Replace all instances of the deprecated React.SFC type with React.FC
