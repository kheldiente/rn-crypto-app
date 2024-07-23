import sampleCoinData from "@/data/coin";
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
import { mockCoinData } from "@/constants/Global";
import UserBalanceView from "@/components/UserBalanceView";

export default function PortfolioScreen() {
    const getCoinsWithBalances = (data) => {
        return data.map(coin => (
            {...coin, priceUsd: "000.00", changePercent24Hr: "000.00"}
        ))
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
                <UserBalanceView cta1Text="Send" cta2Text="Receive" />
                <View>
                    <View style={styles.balancesContainer}>
                        <Text style={styles.balancesLabel}>Balances</Text>
                        <Text style={[styles.balancesLabel, {marginHorizontal: 0, color: "gray"}]}>Web3</Text>
                    </View>
                    <PriceCardList style={styles.priceList} data={balanceCoins} showPercentage={false} />
                    <PriceCardList style={styles.priceList} data={coins} />
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
    totalBalanceLabel: {
        alignSelf: "center",
        color: "gray"
    },
    totalBalanceValue: {
        alignSelf: "center",
        color: "black",
        fontWeight: "bold",
        fontSize: 50
    },
    changedBalanceContainer: {
        alignSelf: "center",
        flexDirection: "row",
    },
    changedBalanceTime: {
        alignSelf: "center",
        color: "black",
        fontSize: 10
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
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 18,
        borderRadius: 15,
        backgroundColor: 'blue',
        minWidth: "45%",
        margin: 2,
        marginTop: 25
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})