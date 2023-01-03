import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    basketText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleText: {
        textAlign: 'center',
        color: 'gray'
    },
    backIcon: {
        borderRadius: 100,
        position: 'absolute',
        top: 12,
        right: 20,
    },
    BasketWrapper: {
        flex: 1,
        backgroundColor: 'white'
    },
    BasketInnerWrapper: {
        flex: 1,
        backgroundColor: '#F3F4F6'
    },
    BasketInnerInnerWrapper: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#00CCBB',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
    },
    logoImage: {
        height: 28,
        width: 28,
        backgroundColor: '#D1D5DB',
        padding: 16,
        borderRadius: 100,
        marginRight: 4
    },
    DeliverText: {
        flex: 1
    },
    changeText: {
        color: '#00CCBB'
    },
    secondChildWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: 'white'
    },
    dishImage: {
        height: 48,
        width: 48,
        borderRadius: 100,
        marginHorizontal: 8
    },
    dishName: {
        flex: 1
    },
    priceText: {
        color: '#4B5563'
    },
    removeText: {
        color: '#00CCBB',
        fontSize: 12
    },
    itemWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'white',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderTopWidth: 1,
        borderBottomWidth: 0,
        borderColor: '#E5E7EB'
    },
    subTotalWrapper: {
        padding: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginVertical: 16
    },
    innerSubTotalWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    OrderButton: {
        borderRadius: 16,
        backgroundColor: '#00CCBB',
        padding: 16,
        marginTop: 12
    },
    OrderText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});
