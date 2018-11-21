import React from 'react';
import { Router , Scene, Lightbox, Drawer } from 'react-native-router-flux';
//Coms
import SideMenu from './components/SideMenu';
import Splash from './pages/Splash';
import Home from './pages/Home';
import MessageLightbox from './components/LightBoxes/MessageLightBox';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene>
          <Scene  key="root" hideNavBar>
            <Lightbox hideNavBar>
              <Scene hideNavBar>
                <Drawer key="drawer" 
                  contentComponent={SideMenu}
                  drawerPosition="right"
                >
                  <Scene hideNavBar>
                      <Scene key="home" component={Home} title="Home" initial/>
                  </Scene>
                </Drawer>
              </Scene>
              <Scene key="messagelightbox" component={MessageLightbox} />
            </Lightbox>
          </Scene>
          <Scene key="splash" hideNavBar component={Splash} title="Splash" initial/>
        </Scene>
      </Router>
    );
  }
}
