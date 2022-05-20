import React from "react";
import { Text, Image, View, SafeAreaView, FlatList } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  DetailsDesc,
  DetailsBid,
  FocusedStatusBar,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      handlePress={() => navigation.goBack()}
      imgUrl={assets.left}
      top={8}
      left={8}
    />
    <CircleButton imgUrl={assets.heart} top={8} right={8} />
  </View>
);
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        // backgroundColor="#f3f3f3"
        // translucent={true}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.white,
        }}
      >
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            paddingVertical: SIZES.font,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.5)",
            zIndex: 1,
          }}
        >
          <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: SIZES.extraLarge * 3,
          }}
          ListHeaderComponent={
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />
              </View>
            </>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;
