import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    ScrollView
} from "react-native";
import { Card } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import SegmentedButton from "@/components/SegmentedButton";
import { toTwoDecimalPoints } from "@/utils/formatter";
import { mockCoinData } from "@/constants/Global";
import { CoinList, Coin } from "@/data/coin";
import PriceCardList from "@/components/PriceCardList";

export default function PricesScreen(props: any) {
    const [coins, setCoins] = useState<CoinList | null>(mockCoinData);
    const [topMoverCoins, setTopMoverCoins] = useState<CoinList | null>(coins);

    const renderHorizontalCoinItem = ({item}) => (
        <Card containerStyle={styles.cardContainer}>
            <View>
                <View>
                    <Image
                        style={[styles.coinImage, {marginLeft: 2}]}
                        source={{uri: item.hostIconUrl}} 
                    />
                    <View style={[styles.cointItemSubSection1, {alignSelf: "flex-start", minWidth: 100, maxWidth: 100, marginTop: 5, overflow: "hidden"}]}>
                        <Text ellipsizeMode="tail" numberOfLines={1}>{item.name} </Text>
                        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.coinSymbol}>{item.symbol}</Text>
                    </View>
                </View>
                <View style={[styles.cointItemSection2, {justifyContent: "flex-start", marginLeft: 5, marginTop: 5}]}>
                    <Text style={[styles.coinItem2, {marginLeft: 0}]}>
                        ${toTwoDecimalPoints(item.priceUsd)}
                    </Text>
                    <Text style={[styles.coinItemPrice2, {marginLeft: 0}]}>
                        {toTwoDecimalPoints(item.changePercent24Hr)}%
                    </Text>
                </View>
            </View>
        </Card>
    );

    const getItemId = (item: { id: any; }) => (item.id)

    const getSegmentButtons = () => {
        return ["Prices", "Spot Markets"];
    };

    const handleScroll = (event: any) => {
        // console.log(props);
        // console.log(event.nativeEvent.contentOffset.y);
    };

    const handleSegmentButtonClick = (index: number) => {
        if (index === 0) {
            setCoins(mockCoinData);
        } else {
            setCoins(mockCoinData.slice(0, 3));
        }
    };

    return (
        <SafeAreaView style={styles.container} edges={['right', 'left']}>
            <ScrollView 
                onScroll={handleScroll}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.header1}>Top Movers</Text>
                <FlatList
                    style={styles.topMoversContainer}
                    horizontal={true}
                    data={topMoverCoins}
                    renderItem={renderHorizontalCoinItem}
                    keyExtractor={getItemId}
                    showsHorizontalScrollIndicator={false}
                />
                <SegmentedButton 
                    style={styles.segmentedButtons} 
                    buttons={getSegmentButtons()} 
                    onPress={handleSegmentButtonClick}
                />
                <View style={styles.container1}>
                    <Text style={styles.header1}>Crypto Prices</Text>
                    <PriceCardList data={coins} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    statusBar: {
        flex: 1,
    },
    segmentedButtons: {
        flexDirection: "row",
        backgroundColor: "white",
        margin: 15,
        borderRadius: 10
    },
    container: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 10
    },
    container1: {
        flexDirection: "column"
    },
    header1: {
        fontSize: 18,
        marginLeft: 20,
        marginRight: 15,
        marginTop: 10
    },
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
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold"
    },
    topMoversContainer: {
        marginBottom: 10
    },
});