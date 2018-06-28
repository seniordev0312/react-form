import './story.css';
import { action, storiesOf, module } from '@storybook/react';
import * as React from 'react';
import AsyncValidation from '../examples/AsyncValidation';
import Arrays from '../examples/Arrays';
import Basic from '../examples/Basic.js';
import CustomImputs from '../examples/CustomInputs';
import MultistepWizard from '../examples/MultistepWizard';
import SchemaValidation from '../examples/SchemaValidation';
import SyncValidation from '../examples/SyncValidation';

const AsyncValidationCode = require('!raw-loader!../examples/AsyncValidation');
const ArraysCode = require('!raw-loader!../examples/Arrays');
const BasicCode = require('!raw-loader!../examples/Basic.js');
const CustomInputsCode = require('!raw-loader!../examples/CustomInputs');
const MultistepWizardCode = require('!raw-loader!../examples/MultistepWizard');
const SchemaValidationCode = require('!raw-loader!../examples/SchemaValidation');
const SyncValidationCode = require('!raw-loader!../examples/SyncValidation');

const Code = props => (
  <pre
    style={{
      border: '1px solid #eee',
      borderRadius: 4,
      fontSize: 11,
      padding: 12,
      margin: 12,
      lineHeight: 1.4,
      position: 'absolute',
      top: 0,
      right: 0,
      width: 500,
      height: '100%',
      overflowX: 'scroll',
    }}
    {...props}
  />
);

storiesOf('Example', module)
  .add('Basic', () => {
    return (
      <div className="story">
        <main>
          <Basic />
        </main>
        <Code>{BasicCode}</Code>
      </div>
    );
  })
  .add('Arrays', () => {
    return (
      <div className="story">
        <main>
          <Arrays />
        </main>
        <Code>{ArraysCode}</Code>
      </div>
    );
  })
  .add('AsyncValidation', () => {
    return (
      <div className="story">
        <main>
          <AsyncValidation />
        </main>
        <Code>{AsyncValidationCode}</Code>
      </div>
    );
  })
  .add('CustomImputs', () => {
    return (
      <div className="story">
        <main>
          <CustomImputs />
        </main>
        <Code>{CustomInputsCode}</Code>
      </div>
    );
  })
  .add('MultistepWizard', () => {
    return (
      <div className="story">
        <main>
          <MultistepWizard />
        </main>
        <Code>{MultistepWizardCode}</Code>
      </div>
    );
  })
  .add('SchemaValidation', () => {
    return (
      <div className="story">
        <main>
          <SchemaValidation />
        </main>
        <Code>{SchemaValidationCode}</Code>
      </div>
    );
  })
  .add('SyncValidation', () => {
    return (
      <div className="story">
        <main>
          <SyncValidation />
        </main>
        <Code>{SyncValidationCode}</Code>
      </div>
    );
  });
