import React from 'react';
import jsonData from '../i18n/locales/en.json';
import { MyCV } from './MyCv';

const App: React.FC = () => {
  return (
    <div>
      <MyCV data={jsonData} />
    </div>
  );
};

export default App;
