import React, { useState } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Image,
    Text
} from "react-native";
import { Card } from "react-native-elements";
import { Service, ServiceList } from "@/data/service";
import { Ionicons } from "@expo/vector-icons";

export default function ServicesCardList(props) {
    const renderServices = (item: Service) => {
        const iconName = item.imageUrl ?? "accessibility-outline"
        return (
            <View>
                <Ionicons
                    style={styles.itemIcon}
                    name={iconName}
                    color="black" 
                    size={25} 
                />
                <Text style={styles.itemLabel}>{item.name}</Text>
            </View>
        );
    };
    
    return (
        <Card containerStyle={styles.cardContainer}>
            <View style={styles.container}>
                {props.data.list.map((item: Service) => {
                    return renderServices(item);
                })}
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        borderColor: "white",
        borderRadius: 10,
        shadowColor: "transparent",
        margin: 10
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    itemIcon: {
        alignSelf: "center",
        marginBottom: 5
    },
    itemLabel: {
        color: "black"
    }
})