import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import colors  from '../../constants/Colors';
// Define your colors directly or use constants from 'react-native'

export default function Dashboard() {
  return (
    <View style={[styles.container, { paddingTop: 40 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.textContainer}>
            <Text style={styles.expenseTitle}>
              My <Text style={styles.expenseText}>Expenses</Text>
            </Text>
            <Text style={styles.expenseAmount}>
              R1475.<Text style={styles.cents}>00</Text>
            </Text>
          </View>
          <View style={styles.emptyContainer}>
            {/* Add any content here if needed */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    gap: 10,
  },
  expenseTitle: {
    color: colors.white,
    fontSize: 16,
  },
  expenseText: {
    fontWeight: '700',
  },
  expenseAmount: {
    color: colors.white,
    fontSize: 36,
    fontWeight: '700',
  },
  cents: {
    fontSize: 22,
    fontWeight: '400',
  },
  emptyContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
