import React from 'react';
// import { I18nManager } from 'react-native';
// I18nManager.forceRTL(true);
import { Router, Scene, Lightbox, Drawer } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
//routes
import Home from './home';
import Splash from './splash';
import Result from './result';
import UnitManage from './unit_manage';
import MessageLightbox from './shared/light_box/MessageLightBox';

//comps
import initDb from '../Data/Init';
import words from '../shared/words';
import appStore from "../shared/store";
import SideMenu from './shared/drawer';
import AddCostLightBox from './home/comps/AddCostLightBox';
import AddUnitLightBox from './unit_manage/comps/AddUnitLightBox';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({
  '$inputActivecolor':'#0091ea'
});

export default class App extends React.Component {
  componentWillMount(){
    initDb();
  }
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
                      <Lightbox hideNavBar initial>
                        <Scene hideNavBar key="costManage">
                          <Scene key="home" component={Home} title={words.Home} />
                        </Scene>
                        <Scene key="addCostLightBox" component={AddCostLightBox} />
                      </Lightbox>
                      <Lightbox hideNavBar>
                        <Scene hideNavBar key="unitManage">
                          <Scene component={UnitManage} title={words.DefineUnit} initial />
                        </Scene>
                        <Scene key="addUnitLightBox" component={AddUnitLightBox} />
                      </Lightbox>
                      <Scene key="result" component={Result} title={words.CostShare} />
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
