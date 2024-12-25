import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpenses } from "./components/incomeexpenses";
import "./components/css/app.css";
export default function App() {
  return (
    <div>
      <Header />
      <br></br>
      <Balance />
      <br></br>
      <IncomeExpenses />
    </div>
  );
}
