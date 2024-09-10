import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { TransactionType } from "../types";

interface TransactionBlockProps {
  transactionList: TransactionType[];
}

const TransactionBlock: React.FC<TransactionBlockProps> = ({
  transactionList,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction Summary</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.headerItem}>First Name</Text>
        <Text style={styles.headerItem}>Last Name</Text>
        <Text style={styles.headerItem}>Email Address</Text>
        <Text style={styles.headerItem}>Amount</Text>
      </View>
      <FlatList
        data={transactionList}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <Text style={[styles.itemText, { backgroundColor: "" }]}>
              {item.firstname}
            </Text>
            <Text style={[styles.itemText, { backgroundColor: "" }]}>
              {item.lastname}
            </Text>
            <Text style={[styles.itemText, { backgroundColor: "" }]}>
              {item.emailaddress}
            </Text>
            <Text style={[styles.itemText, { backgroundColor: "" }]}>
              R{item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    color: "#fff",
    fontSize: 14,
    flex: 1,
    textAlign: "center",
  },
  header: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    marginBottom: 10,
  },
  headerItem: {
    color: "#fff",
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  container: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  itemWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#444",
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  itemName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  itemAmount: {
    color: "#f0f0f0",
    fontSize: 14,
  },
  itemDate: {
    color: "#bbb",
    fontSize: 12,
  },
});

export default TransactionBlock;
