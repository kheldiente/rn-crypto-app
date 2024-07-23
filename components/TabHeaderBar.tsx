import React, { useState } from "react";
import {
    View,
    Pressable,
    Text,
    StyleSheet,
} from "react-native";
import { Icon } from "react-native-elements";

export default function TabHeaderBar(props) {
    const iconSize = 25
    const iconType = "ionicon"

    return (
        <View style={{
            flex: 1, 
            flexDirection: "row", 
            justifyContent: "space-between",
            marginLeft: 5,
            marginRight: 20,
            paddingBottom: 10
        }}>
            <Icon
                type={iconType}
                name="person-outline"
                size={iconSize}
            />
            <View/>
            <View style={{flexDirection: "row"}}>
                <Icon
                    type={iconType}
                    name="notifications-outline"
                    size={iconSize}
                />
                <Icon
                    style={{marginLeft: 15}}
                    type={iconType}
                    name="search-outline"
                    size={iconSize}
                />
            </View>
        </View>
    )
};