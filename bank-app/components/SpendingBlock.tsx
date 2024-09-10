// SpendingBlock.js or SpendingBlock.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SpendingType } from '../types';

interface SpendingBlockProps {
  spendingList: SpendingType[];
}

const SpendingBlock: React.FC<SpendingBlockProps> = ({ spendingList }) => {
  return (
    <View  style={styles.container}>
    <Text style={styles.header}>Transaction Summary</Text>
      {spendingList.map((item) => (
        <View key={item.id} style={styles.itemWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemAmount}>R{item.amount}</Text>
            <Text style={styles.itemDate}>{item.date}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15, // Space between header and item list
      },
  container: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#333', // Background color for the block
    borderRadius: 10,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#444', // Background color for each item
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
  },
  itemName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  itemAmount: {
    color: '#f0f0f0', // Lighter color for amount
    fontSize: 14,
  },
  itemDate: {
    color: '#bbb', // Lighter color for date
    fontSize: 12,
  },
});

export default SpendingBlock;
