import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { handles:['click','change'] },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
