import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5", // ตั้งค่าสีพื้นหลังเป็นสีเทาอ่อน
  },
  profileImage: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#40E0D0",
    elevation: 5,
    marginTop: 50,
  },
  profileName: {
    color: "#FF00FF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#ffffff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
  
    marginBottom: 400,
  },
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  header: {
    flex:1,
    width: "100%",
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export { styles, styles2 };
