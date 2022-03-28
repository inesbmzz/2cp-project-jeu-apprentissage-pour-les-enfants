import React from "react";
import { View, Text, Image, Pressable, Dimensions } from "react-native";

export default function HomeCard({ title, desc, image, color }) {
  return (
    <View style={{ marginTop: 20, borderRadius: 20, overflow: "hidden" }}>
      <Pressable
        style={{ backgroundColor: color + "CC", padding: 10 }}
        android_ripple={{ color: color }}
      >
        <View>
          <Text
            style={{
              fontFamily: "RowdiesBold",
              color: "white",
              fontSize: 25,
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "flex-start", flex: 2 }}>
            <Text
              style={{
                color: "white",
                fontFamily: "RowdiesBold",
                fontSize: 17,
                marginBottom: 40,
                textAlign: "center",
              }}
            >
              {desc}
            </Text>
            <View
              style={{
                borderRadius: 20,
                overflow: "hidden",
                margin: 20,
                alignItems: "flex-end",
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
                android_ripple={{ color: "#AAAAAA" }}
              >
                <Text style={{ color: color, fontFamily: "RowdiesBold" }}>
                  Jouer
                </Text>
              </Pressable>
            </View>
          </View>
          <Image
            resizeMode="contain"
            style={{
              height: "100%",
              width: "100%",
              flex: 1,
            }}
            source={image}
          />
        </View>
      </Pressable>
    </View>
  );
}
