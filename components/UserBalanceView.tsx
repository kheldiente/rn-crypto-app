import React, { useState } from "react";
import {
    View,
    Pressable,
    Text,
    StyleSheet
} from "react-native";

export default function UserBalanceView(props) {
    const showBuySellCtas = props.showBuySellCtas ?? true
    const cta1Text = props.cta1Text ?? "Buy/Sell"
    const cta2Text = props.cta2Text ?? "Transfer"

    return (
        <View>
            <View>
                <Text style={styles.totalBalanceLabel}>Total balance</Text>
                <Text style={styles.totalBalanceValue}>$1030.00</Text>
                <View style={styles.changedBalanceContainer}>
                    <Text style={styles.totalBalanceLabel}>$0.00  </Text>
                    <Text style={styles.changedBalanceTime}>last24h</Text>
                </View>
            </View>
            {showBuySellCtas ?
                <View style={styles.changedBalanceContainer}>
                    <Pressable style={styles.button} key={0}>
                        <Text style={styles.text}>{cta1Text}</Text>
                    </Pressable>
                    <Pressable style={styles.button} key={1}>
                        <Text style={styles.text}>{cta2Text}</Text>
                    </Pressable>
                </View> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
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
  });