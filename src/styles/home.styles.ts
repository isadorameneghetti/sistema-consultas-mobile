import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  icone: {
    fontSize: 60,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#79059C",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: "#666",
  },
  menu: {
    gap: 16,
  },
  card: {
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPrimario: {
    backgroundColor: "#79059C",
  },
  cardSecundario: {
    backgroundColor: "#4CAF50",
  },
  cardTerciario: {
    backgroundColor: "#2196F3",
  },
  cardQuaternario: {
    backgroundColor: "#FF9800",
  },
  cardIcone: {
    fontSize: 48,
    marginBottom: 12,
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  cardDescricao: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.9,
  },
  logoutButton: {
    marginTop: 32,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#f44336",
    alignItems: "center",
  },
  logoutText: {
    color: "#f44336",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    marginTop: 24,
    paddingTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
  footerSubtext: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },
});
export default styles;