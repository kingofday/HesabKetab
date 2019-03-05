import React from 'react';
import { View, Text, ActivityIndicator, I18nManager } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
I18nManager.forceRTL(true);
import LinearGradient from 'react-native-linear-gradient';

//comps
import words from '../../shared/words'
import commonStyles from '../../shared/styles'
import splashStyles from './styles'

class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.reset('root');
        }, 3000)
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={splashStyles.wrapper}>
                <ActivityIndicator size="large" color="white" />
                <View style={{ paddingTop: 20, }}>
                    <Text style={[{ color: '#ffffff' }, commonStyles.fontFa]}>{words.Loading}</Text>
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