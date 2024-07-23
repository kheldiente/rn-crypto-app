import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Pressable,
  ScrollView
} from "react-native";

import PriceCardList from "@/components/PriceCardList";
import { mockCoinData, servicesInHomeList } from "@/constants/Global";
import UserBalanceView from "@/components/UserBalanceView";
import ServicesCardList from "@/components/ServicesCardList";

export default function HomeScreen() {
  const getCoinsWithBalances = (data) => {
    return data.map(coin => (
      { ...coin, priceUsd: "000.00", changePercent24Hr: "000.00" }
    )).slice(0, 5);
  }

  const getBalanceCoins = (data) => {
    return data.slice(0, 2);
  }

  const [coins, setCoins] = useState(getCoinsWithBalances(mockCoinData));
  const [balanceCoins, setBalanceCoins] = useState(getBalanceCoins(mockCoinData));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <UserBalanceView />
        <View>
          <Text style={styles.balancesLabel}>Services</Text>
          {/* <PriceCardList style={styles.priceList} data={balanceCoins} showPercentage={false} /> */}
          <ServicesCardList data={servicesInHomeList} />
          <Text style={styles.balancesLabel}>Crypto Prices</Text>
          <PriceCardList 
            style={styles.priceList} 
            data={coins}
            showFooterItem={true} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  priceList: {
    marginVertical: 20,
    marginHorizontal: 20
  },
  balancesLabel: {
    alignSelf: "flex-start",
    color: "black",
    fontSize: 20,
    marginHorizontal: 20,
    marginTop: 20
  },
  balancesContainer: {
    flex: 1,
    flexDirection: "row"
  }
})