import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import {useState, useEffect} from 'react'




function App2() {
  const [todos, setTodos] = useState([])

  type Product = {
    id:number;
    type:string;
    price:number;
  }

  let nome = [ {
    "id": 1,
    "type": "dog",
    "price": 249.99

  },
  {
    "id": 2,
    "type": "cat",
    "price": 124.99
  },
  {
    "id": 3,
    "type": "fish",
    "price": 0.99
  } ]

  useEffect(() => {
    fetch('http://petstore-demo-endpoint.execute-api.com/petstore/pets')
    .then(response => response.json())
    .then(res => console.log(res))

  }, [])

  return (
    <IonContent>
        {todos.map(item => {
          return (
            <IonList key={item.id}>
              <IonLabel>Id: {item.id}</IonLabel>
              <IonLabel>Type: {item.type}</IonLabel>
              <IonLabel>Price: {item.price}</IonLabel>
            </IonList>
          )
        })}
        
    </IonContent>
  )

}





setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet placeholder={undefined}>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
