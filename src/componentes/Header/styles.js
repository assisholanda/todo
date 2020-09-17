import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#FF9300',
        alignItems: 'center',           // alinhamento na horizontal
        justifyContent: 'center'   // alinhamento vertical
    },

    leftIcon: {
        position: "absolute",
        left: 20, 
        top: 45
    },

    leftIconImage: {
        width: 35,
        height: 35
    },

    logo: {
        width: 100,
        height: 30,
        marginTop:30  
    },

    notification: {
        position: "absolute",
        right: 20, 
        top: 45
    },

    notificationImage: {
        width: 35,
        height: 35
    },

    circle:{
        backgroundColor: "#FFF",
        borderRadius: 50,
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 15,
        bottom: 15
    },

    notificationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF8000"
    }

});

export default styles;