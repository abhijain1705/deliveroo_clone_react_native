import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ThankWrapper: {
        backgroundColor: '#00CCBB',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    ThankInnerWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    IconCheck: {
        marginVertical: 40
    },
    HiText: {
        color: 'white',
        fontSize: 20,
        marginVertical: 12
    },
    BasketText: {
        color: 'white',
        fontSize: 20,
        marginVertical: 12,
        fontWeight: 'bold',
        maxWidth: 300,
    },
    DetailWrapper: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    OrderText: {
        color: '#4B5563',
        marginVertical: 12
    },
    DateText: {
        maxWidth: 250,
        fontWeight: 'bold',
        fontSize: 14
    },
    ThankyouText: {
        marginVertical: 20,
        maxWidth: 300,
        fontSize: 12,
        color: '#4B5563'
    },
    invoiceWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    invoiceText: {
        marginVertical: 20,
        maxWidth: 300,
        fontSize: 15,
    },
    founderNameText: {
        marginTop: 20,
        maxWidth: 300,
        fontSize: 15
    },
    posText: {
        color: '#00CCBB'
    },
    facebook: {
        backgroundColor: '#00CCBB',
        color: 'white',
        width: 40,
        height: 40,
        borderRadius: 100,
        padding: 10,
        alignItems: 'center',
        display: 'flex',
        marginRight: 20
    },
    followWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20
        
    },
    IconWrapper: {
        display: 'flex',
        flexDirection: 'row'
    },
    bottomSheetWrapper: {
        height: 500,
        overflow: 'scroll'
    },
    bottomChildWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    addressWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    addresText: {
        fontWeight: 'bold'
    },
    locationWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 12,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 20,
        marginHorizontal: 60,
        borderRadius: 12
    },
    priceChildsWrapp: {
        padding: 20,
        backgroundColor: '#E5E7EB',
        height: 100,
        width: 100,
        marginHorizontal: 20
    },
    payWrapper: {
        paddingVertical: 20,
        paddingHorizontal: 40,
        margin: 20,
        flex: 1,
        backgroundColor: '#00CCBB',
        borderRadius: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});