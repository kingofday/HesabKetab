import React from 'react';
import {I18nManager} from 'react-native';

import { Router , Scene, Lightbox, Drawer } from 'react-native-router-flux';
I18nManager.forceRTL(true);
//Coms
import SideMenu from './components/SideMenu';
import Splash from './pages/Splash';
import Home from './pages/Home';
import DefineUnit from './pages/DefineUnit';
import SaveDebt from './pages/SaveDebt';
import MessageLightbox from './components/LightBoxes/MessageLightBox';
import Words from './assets/Wrods';

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
                  drawerPosition="right">
                  <Scene hideNavBar>
                      <Scene key="home" component={Home} title={Words.Home} initial/>
                      <Scene key="defineUnit" component={DefineUnit} title={Words.DefineUnit}/>
                      <Scene key="saveDebt" component={SaveDebt} title={Words.SaveDebt}/>
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
