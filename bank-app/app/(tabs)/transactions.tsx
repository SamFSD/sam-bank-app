import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import TransactionBlock from "../../components/TransactionBlock";
import TransactionList from "../../data/transactionSummary.json";
import { TransactionType } from "../../types";
import SendMoneyForm from "../../components/SendMoneyForm";

const transactions: TransactionType[] = TransactionList as unknown as TransactionType[];export default function Transactions() {
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.separator} />
      {/* //form to send money  */}
      <SendMoneyForm /> {/* Include the form */}
      </View>
      
      <TransactionBlock TransactionList={transactions} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
