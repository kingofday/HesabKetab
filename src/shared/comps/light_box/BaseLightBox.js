import React from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import { View, Button, Text, Icon } from 'native-base';
// import EStyleSheet from 'react-native-extended-stylesheet';
import { Actions } from 'react-native-router-flux';
const { height: deviceHeight, width: deviceWidth } = Dimensions.get('window');

export default class BaseLightbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            opacity: new Animated.Value(0)
        }

    }

    componentWillMount() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
        }).start();
    }

    close() {
        Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 200
        }).start(Actions.pop);
    }

    _renderLightbox() {
        const { children, verticalPercent = 1, horizontalPercent = 1 } = this.props;
        const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;
        const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
        return (
            <View style={{ width, height, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 4,padding: 15}}>
                {children}
                <Button transparent style={{ position: 'absolute', top: 0, right: 0 }} onPress={() => this.close()}>
                    <Icon name='close' style={{ fontSize: 20, color: '#34495e' }} />
                </Button>
            </View>
        )
    }

    render() {
        return (
            <Animated.View style={[styles.container, { opacity: this.state.opacity }]}>
                {this._renderLightbox()}
            </Animated.View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52,52,52,.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

