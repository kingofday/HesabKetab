import React, { Component } from 'react';
import { Container, Content, Header, Title, Button, Text, Right, Left, Body, Icon } from 'native-base';
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
                    <Content padder style={{ flex: 1, backgroundColor: 'transparent' }}>
                        {this.props.children}
                    </Content>

                </Container>

            </LinearGradient>


        );
    }
}

const mapStateToProps = state => {
    const { LayoutReducer } = state;
    return { ...LayoutReducer };
}

// const mapDispatchToProps = dispatch => {
//     return {
//         select: (checked) => {

//             dispatch(addPlace(name))
//         }
//     }
// }

export default connect(mapStateToProps)(Layout);