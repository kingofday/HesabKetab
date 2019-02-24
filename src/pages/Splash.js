import React from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.reset('root');
        }, 0)
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    {/* <Image style={{marginBottom: 10}} source={require('../assets/images/kingofday.png')}/> */}
                    <Text style={{ color: '#ffffff' }}>در حال بارگذاری ...</Text>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
            </LinearGradient>
        );
    }
}

const mapStateToProps = state => {
    return state
}

// const mapDispatchToProps = dispatch => {
//     return {
//         select: (checked) => {

//             dispatch(addPlace(name))
//         }
//     }
// }

export default connect(mapStateToProps)(Splash);