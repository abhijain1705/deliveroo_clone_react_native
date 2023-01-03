import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  ImageWrapper: {
    position: "relative",
  },
  Image: {
    height: 224,
    width: "100%",
    backgroundColor: "#D1D5DB",
    padding: 14,
  },
  ArrowBackIcon: {
    position: "absolute",
    top: 56,
    left: 20,
    padding: 8,
    backgroundColor: "#F3F4F6",
    borderRadius: 100,
  },
  TitleWrapper: {
    backgroundColor: "white",
  },
  TitleInnerWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  TitleText: {
    fontWeight: "bold",
    fontSize: 36,
  },
  LocateWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 4,
  },
  LocateInnerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4
  },
  GenreText: {
    fontSize: 12,
    color: '#6B7280'
  },
  descriptionText: {
    marginTop: 8,
    paddingBottom: 16,
    color: '#6B7280'
  },
  AllergyText: {
    paddingLeft: 8,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold'
  },
  allergyWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#D1D5DB',
    borderBottomColor: '#D1D5DB'
  },
  MenuColor: {
    paddingHorizontal: 16,
    paddingTop: 24,
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 20
  },
  dishWrapper: {
    paddingBottom: 120
  }
});
