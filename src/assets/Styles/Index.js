import EStyleSheet from 'react-native-extended-stylesheet';
export const drawer = EStyleSheet.create({
    header:{
        height:100,
        textAlign:'center',
        justifyContent:"center",
        backgroundColor:'#54a0ff',
        marginLeft:0
    },
    headerImage:{
        height:70,
        width:70,

    },
    item:{
        paddingRight:5,
        paddingLeft:5,
        paddingTop:10,
        paddingBottom:5

    },
    routeIcon:{
        marginRight: 10,
    },
    routeName:{
        color:'#222f3e'
    }
});

export const common = EStyleSheet.create({
    underlineBorder:{
        borderColor:'#ced4da',
    },
    underlineActiveBorder:{
        borderColor:'#4285f4'
    }
});
export default styles = {
    common
};