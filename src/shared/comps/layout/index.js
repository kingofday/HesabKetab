import React, { Component } from 'react';
// import { I18nManager } from 'react-native';
// I18nManager.forceRTL(true);
import { Container } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class Layout extends Component {
    componentWillMount() {
    }
    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <Container style={{ flex: 1, backgroundColor: 'transparent' }}>
                    {this.props.header}
                    {this.props.children}
                </Container>
            </LinearGradient>


        );
    }
}

const mapStateToProps = state => {
    const { LayoutReducer } = state;
    return { ...LayoutReducer };
}

export default connect(mapStateToProps)(Layout);