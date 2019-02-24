import React from 'react';
import { I18nManager } from 'react-native';
import { Router, Scene, Lightbox, Drawer } from 'react-native-router-flux';
I18nManager.forceRTL(true);
import { connect, Provider } from 'react-redux';
//Coms
import SideMenu from './components/SideMenu';
import Splash from './pages/Splash';
import Home from './pages/Home';
import UnitManage from './pages/UnitManage';
import DefineCost from './pages/DefineCost';
import MessageLightbox from './components/LightBoxes/MessageLightBox';
import Words from './assets/Wrods';
import appStore from "./redux/store";

export default class App extends React.Component {
  render() {
    const RouterWithRedux = connect()(Router);
    const store = appStore();
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene>
            <Scene key="root" hideNavBar>
              <Lightbox hideNavBar>
                <Scene hideNavBar>
                  <Drawer key="drawer"
                    contentComponent={SideMenu}
                    drawerPosition="right">
                    <Scene hideNavBar>
                      <Scene key="home" component={Home} title={Words.Home}  />
                      <Scene key="unitManage" component={UnitManage} title={Words.DefineUnit} initial/>
                      <Scene key="defineCost" component={DefineCost} title={Words.SaveDebt} />
                    </Scene>
                  </Drawer>
                </Scene>
                <Scene key="messagelightbox" component={MessageLightbox} />
              </Lightbox>
            </Scene>
            <Scene key="splash" hideNavBar component={Splash} title="Splash" initial />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
