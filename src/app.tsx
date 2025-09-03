import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { useCharactersStore } from './store/charactersStore';

const App: React.FC = () => {
  const load = useCharactersStore((s) => s.load);

  React.useEffect(() => {
    load();
  }, [load]);

  return <RootNavigator />;
};

export default App;
