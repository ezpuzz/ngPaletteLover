import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Top from './components/Top';
import New from './components/New';
import useRootScope from './hooks/useRootScope';

const App: React.FC = () => {
  const { offset, setOffset, hues, setHues, topPalettes, setTopPalettes, newPalettes, setNewPalettes } = useRootScope();

  const getPalettes = (type: string) => {

    const hueOption = hues.length > 0 ? hues.join(',') : null;
    const params = {
      type,
      resultOffset: offset,
      hueOption,
    };

    // Assuming fetchPalettes is a function that fetches palettes based on the provided parameters
    fetchPalettes(params)
      .then((palettes) => {
        if (type === 'top') {
          setTopPalettes(palettes);
        } else if (type === 'new') {
          setNewPalettes(palettes);
        }
      })
      .catch((error) => {
        console.error('Error fetching palettes:', error);
      });
  };

  React.useEffect(() => {
    getPalettes('top');
  }, [hues, offset]);

  const getWorse = () => {
    setOffset(offset + 20);
    getPalettes('top');
  };

  const getBetter = () => {
    setOffset(offset >= 20 ? offset - 20 : 0);
    getPalettes('top');
  };

  const getOlder = () => {
    setOffset(offset + 20);
    getPalettes('new');
  };

  const getNewer = () => {
    setOffset(offset >= 20 ? offset - 20 : 0);
    getPalettes('new');
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/top" render={() => <Top topPalettes={topPalettes} getWorse={getWorse} getBetter={getBetter} />} />
        <Route path="/new" render={() => <New newPalettes={newPalettes} getOlder={getOlder} getNewer={getNewer} />} />
        <Redirect to="/top" />
      </Switch>
    </Router>
  );
};

export default App;
