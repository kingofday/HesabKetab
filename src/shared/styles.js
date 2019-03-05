import EStyleSheet from 'react-native-extended-stylesheet';

export default styles = EStyleSheet.create({
    underlineBorder: {
        borderColor: '#ced4da',
    },
    underlineActiveBorder: {
        borderColor: '#4285f4'
    },
    p: {
        padding: 15
    },
    p_t: {
        paddingTop: 15
    },
    m: {
        margin: 15
    },
    m_t: {
        marginTop: 15
    },
    button: {
        fontSize: 10
    },
    fontFa: {
        '@media ios': {
            fontFamily: 'IRANSansMobile',
            fontWeight: "500"
        },
        '@media android': {
            fontFamily: 'IRANSansMobile_Medium',
        },
    }

});