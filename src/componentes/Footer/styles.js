import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 100,
        backgroundColor: '#20295F',
        position: "absolute",
        bottom: 0,
        borderTopWidth: 5,
        borderTopColor: '#FF9300',
        alignItems: 'center',           // alinhamento na horizontal
        justifyContent: 'center'   // alinhamento vertical
    },

    button: {
        position: "relative",
        top: -50
    },

    image: {
        width:90,
        height:90
    },

    text: {
        position: "relative",
        top: -40,
        color: "#FFF"
    }

    
});

export default styles;