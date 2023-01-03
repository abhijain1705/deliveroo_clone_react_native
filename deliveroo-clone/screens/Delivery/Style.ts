import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  deliveryWrapper: {
    backgroundColor: "#00CCBB",
    flex: 1,
  },
  deliveryInnerWrapper: {
    zIndex: 50,
  },
  orderHelpInnerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  ProgressWrapper: {
    width: 350,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 25,
    padding: 24,
    zIndex: 50,
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
  },
  ProgressInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  arrivalText: {
    fontSize: 24,
    color: '#9CA3AF'
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  imageWrapper: {
    height: 80,
    width: 80
  },
  preparingText: {
    marginTop: 12,
    color: '#9CA3AF'
  },
  mapView: {
    zIndex: 0,
    flex: 1,
    marginTop: 40
  }
});
