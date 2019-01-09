import EStyleSheet from 'react-native-extended-stylesheet';
export const drawer = EStyleSheet.create({
    header:{
        height:150,
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

export const util = EStyleSheet.create({
    underlineBorder:{
        borderColor:'#ced4da',
    },
    underlineActiveBorder:{
        borderColor:'#4285f4'
    },
    statndard:{
        p:{
            padding:15
        },
        p_t:{
            paddingTop:15
        },
        m:{
            margin:15
        },
        m_t:{
            marginTop:15
        },
        button:{
            fontSize:10
        }
    }

});
export default styles = {
    util
};