import React, { useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Image,
    Text
} from "react-native";
import { Card } from "react-native-elements";

import { toTwoDecimalPoints } from "@/utils/formatter";

export default function PriceCardList(props) {
    props = {...props, showPercentage: props.showPercentage ?? true};

    const footerItem = () => {
        return (props.showFooterItem ?
            <View>
                <Text style={styles.footer}>View more {"→"}</Text>
            </View> : null
        )
    }

    const renderCoinItem = ({item}) => (
        <View style={styles.coinItem}>
            <View style={styles.cointItemSection1}>
                <Image
                    style={styles.coinImage}
                    source={{uri: item.hostIconUrl}} 
                />
                <View style={styles.cointItemSubSection1}>
                    <Text>{item.name} </Text>
                    <Text style={styles.coinSymbol}>{item.symbol}</Text>
                </View>
            </View>
            <View style={styles.cointItemSection2}>
                <Text style={styles.coinItem2}>
                    ${toTwoDecimalPoints(item.priceUsd)}
                </Text>
                {props.showPercentage ? 
                    <Text style={styles.coinItemPrice2}>
                        {toTwoDecimalPoints(item.changePercent24Hr)}%
                    </Text> : null
                }
            </View>
        </View>
    );

    return (
        <Card containerStyle={[styles.cardContainer, {...props.style}]}>
            <FlatList
                data={props.data}
                renderItem={props.renderCoinItem ?? renderCoinItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={footerItem}
            />
        </Card>
    );
}

const styles = StyleSheet.create({
    coinItem: {
        flexDirection: "row",
        margin: 10
    },
    cointItemSection1: {
        flexDirection: "row",
        marginRight: "auto",
        alignSelf: "center"
    },
    cointItemSubSection1: {
        flexDirection: "row",
        marginLeft: 5,
        alignSelf: "center"
    },
    cointItemSection2: {
        flexDirection: "column",
        marginLeft: "auto"
    },
    coinItem2: {
        marginLeft: "auto",
        fontSize: 13
    },
    coinItemPrice2: {
        marginLeft: "auto",
        color: "red",
        fontSize: 13
    },
    coinSymbol: {
        color: "gray"
    },
    coinImage: {
        width: 30,
        height: 30
    },
    cardContainer: {
        borderColor: "white",
        borderRadius: 20,
        shadowColor: "transparent",
        margin: 10
    },
    footer: {
        alignSelf: "center",
        fontSize: 12,
        color: "gray"
    }
});