import ReactOnRails from 'react-on-rails';

import QuizModeApp from '../bundles/QuizMode/startup/QuizModeApp';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  QuizModeApp,
});
