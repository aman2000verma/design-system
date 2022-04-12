import * as React from 'react';
import Subheading from '../index';

// CSF format story
export const all = () => {
  const appearance = 'white';

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Subheading appearance={appearance}>
        Subheading component have different varients, look for options in knobs tab.
      </Subheading>
    </div>
  );
};

export default {
  title: 'Components/Subheading/All',
  component: Subheading,
  parameters: {
    docs: {
      docPage: {
        title: 'Subheading',
      },
    },
  },
};