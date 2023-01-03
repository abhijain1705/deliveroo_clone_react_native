import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Home: {
    backgroundColor: 'white',
    paddingTop: 20,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 12,
    marginHorizontal: 24,
  },
  HeaderImage: {
    height: 28,
    width: 28,
    backgroundColor: "#D1D5DB",
    padding: 16,
    borderRadius: 50,
  },
  HeaderContainer: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 8
  },
  HeaderText1: {
    fontWeight: "bold",
    color: "#9CA3AF",
    fontSize: 12,
    lineHeight: 16,
  },
  HeaderText2: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
  },
  Search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    marginHorizontal: 16
  },
  SearchContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#E5E7EB',
    padding: 12,
    alignItems: 'center'
  },
  Body: {
    backgroundColor: '#EAF4F6',
  }
});
