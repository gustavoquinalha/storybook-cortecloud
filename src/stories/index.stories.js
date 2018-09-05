/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number, select, color, date, button, array } from '@storybook/addon-knobs/vue';
import { registerStories } from 'vue-storybook'
import { configure } from '@storybook/vue';

// import '../assets/css/main.css';

const req = require.context('./', true, /\.vue$/)

function loadStories() {
  req.keys().forEach((filename) => {
    registerStories(req, filename, storiesOf, {withKnobs, withNotes, action, text, number, boolean, select, color, date, button, array})
  })
}

loadStories()
/* eslint-enable react/react-in-jsx-scope */


storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('Simple', () => {
    const name = text('Text', 'Button text');
    const radius = number('Border Radius', 4);
    const background = color('Background color', '#007bff');
    const Textcolor = color('Text color', '#fff');
    const height = number('Min height', 42);
    const padding = number('Padding', 16);
    const classes = select('Classes', ['teste', 'teste 2']);

    const content = `<button class="btn" :class="'${classes}'" :style="{border: 'none', minHeight: ${height} + 'px', paddingLeft: ${padding} + 'px', paddingRight: ${padding} + 'px', borderRadius: ${radius} + 'px', color: '${Textcolor}', background: '${background}'}">
                      ${name}
                    </button>`;
    return {
      template: `<div>${content}</div>`,
    };
  })

  .add('Outline', () => {
    const name = text('Text', 'Button text');
    const radius = number('Border Radius', 4);
    const Textcolor = color('Color', '#007bff');
    const height = number('Min height', 42);
    const padding = number('Padding', 16);
    const classes = select('Classes', ['teste', 'teste 2']);

    const content = `<button class="btn" :class="'${classes}'" :style="{border: '1px solid ${Textcolor}', minHeight: ${height} + 'px', paddingLeft: ${padding} + 'px', paddingRight: ${padding} + 'px', borderRadius: ${radius} + 'px', color: '${Textcolor}', background: 'transparent'}">
                      ${name}
                    </button>`;
    return {
      template: `<div>${content}</div>`,
    };
  })
