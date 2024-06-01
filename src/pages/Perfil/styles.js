import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    containerName: {
        margin: 20,
        marginTop: 70,
        borderBottomWidth: 1,
        borderColor: '#a2a2a2',
        borderRadius: 10,
    },
    containerLogo: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#141414',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderWidth: 3,
        borderColor: '#fff',
        paddingEnd: '5%',
    },
    subTitle: {
        color: '#a2a2a2',
        fontSize: 16.5,
        fontWeight: 'bold',
        marginTop: 5,
        paddingStart: '3%',
    },
    text: {
        color: '#fff',
        paddingStart: '5%',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 15,
    },
    iconsStyle: {
        fontSize: 40,
        color: '#fff',
        marginStart:'5%'
    },
    name: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor: '#a2a2a2',
        borderRadius: 25,
    },
    image: {
        bottom: 80,
        position: "absolute",
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: "#ffffff",
        borderRadius: width * 0.5,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#fff"
    },
    imageView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        right: '50%',
        top: '50%',
        left: '50%',
        zIndex: 1
    }
})

export default styles;