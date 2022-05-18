import React from "react";
import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, NFTData } from "../constants";
import { NFTCard, FocusedStatusBar, HomeHeader } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Home sweet Bosco</Text>
        <NFTCard />
      </View>
    </SafeAreaView>
  );
};

export default Home;
