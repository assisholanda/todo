import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF', 
        alignItems: 'center',       // alinhamento horizontal
        justifyContent: 'flex-start'   // alinhamento vertical
    },

    filter:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 70
    },

    filterTextActivied: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#FF8000"
    },

    filterTextInactivied: {
        fontWeight: "bold",
        fontSize: 18,
        color: '#20295F',
        opacity: 0.5
    },

    content: {
        width: '100%',
        marginTop: 20,
        marginBottom: 110
    },

    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295F',
        alignItems: 'center'
    },

    titleText: {
        color: '#20295F',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingRight:10
    },

    titleTextLate: {
        color: '#DF1414',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingRight:10
    },

    
});

export default styles;