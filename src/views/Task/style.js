import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },

    imageIcon: {
        width: 55,
        height: 55,
        marginHorizontal: 7,
        alignItems: 'flex-end'
    },

    label: {
        color: '#707070',   
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
    },

    input: {
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderBottomWidth: 2,
        borderBottomColor: '#FF8000',
        marginHorizontal:10
    },

    inputArea: {
        fontSize: 18,
        padding: 10,
        width: '95%',
        borderWidth: 2,
        borderColor: '#FF8000',
        marginHorizontal:10,
        borderRadius: 10,
        height: 100,
        textAlignVertical: "top"
    },

    inline: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },

    inputInline: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },

    switchLabel: {
        fontWeight: "bold",
        fontSize: 18,
        paddingLeft: 5,
        color: '#FF8000',
        textTransform: "uppercase"
    },

    removeLabel: {
        fontWeight: "bold",
        fontSize: 25,
        color: '#20295F',
        textTransform: "uppercase"
    }



});

export default styles;