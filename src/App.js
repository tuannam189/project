import { Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhotoForm from './Features/Photo/Components/PhotoForm';
import Photo from './Features';

function App() {
  library.add(fas)
  return (
    <div className='photo-app'>
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
        </Switch>
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
