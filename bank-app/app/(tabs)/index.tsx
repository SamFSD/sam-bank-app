import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import colors  from '../../constants/Colors';
import { PieChart } from "react-native-gifted-charts";
import SpendingBlock from '../../components/SpendingBlock';

import spendingList from '../../data/spendingList.json';





// get data from the backend
// Define your colors directly or use constants from 'react-native'
const pieData = [
  {
    value: 47,
    color: colors.tintColor,
    focused: true,
    text: "47%", /// calculate from the backend api
  },
  {
    value: 40,
    color: colors.blue,
    text: "40%",/// calculate from the backend api
  },
  {
    value: 16,
    color: colors.white,
    text: "16%",/// calculate from the backend api
  },
  { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
];
export default function Dashboard() {
  return (
    <View style={[styles.container, { paddingTop: 20 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
              padding: 10,
              backgroundColor: '#444', // Background color for each item
              borderRadius: 5,
              
            }}>
          <View style={styles.textContainer}>
            <Text style={styles.expenseTitle}>
              My <Text style={styles.expenseText}>Balance</Text>
            </Text>
            <Text style={styles.expenseAmount}>
              R1475.<Text style={styles.cents}>00</Text>
            </Text>
          </View>
          <View style={{paddingVertical:20,alignItems:'center'}}>
              <PieChart
                data={pieData}
                donut
                showGradient
                sectionAutoFocus
                semiCircle
                radius={70}
                innerRadius={55}
                innerCircleColor={colors.tintColor}
                centerLabelComponent={() => {
                  return (
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontSize: 22,
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        47%
                      </Text>
                    </View>
                  );
                }}
              />
          </View>
        </View>
       <SpendingBlock spendingList={spendingList} />         
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  sectionTitle: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
  spendingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconWrapper: {
    backgroundColor: colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  textWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
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
