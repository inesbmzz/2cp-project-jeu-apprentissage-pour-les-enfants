import { Center, FlatList, Modal, Pressable, Switch } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";
import avatars from "../avatars";

export default function Settings({
  toggleMusic,
  toggleSound,
  toggleLanguage,
  language,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        <View
          style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 900,
            padding: 4,
            backgroundColor: "white",
          }}
        >
          <Image
            style={{
              padding: 2,
              height: 40,
              width: 40,
            }}
            resizeMode="contain"
            source={require("../../assets/icons/settings.png")}
          />
        </View>
      </Pressable>
      <Modal
        animationPreset="slide"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "85%",
            height: "70%",
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <View style={{ height: "15%", justifyContent: "center" }}>
            <Pressable
              style={{
                padding: 5,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: colors.MAIN,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 20,
                  backgroundColor: colors.MAIN,
                  color: "white",
                  borderRadius: 10,
                  fontFamily: "RowdiesBold",
                }}
              >
                {language === 0
                  ? "Règlages"
                  : language === 1
                  ? "Settings"
                  : "إعدادات"}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              height: "75%",
              backgroundColor: colors.MAIN,
              width: "100%",
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 3,
                borderColor: "white",
                padding: 5,
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
                source={require("../../assets/icons/loudspeaker.png")}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "RowdiesBold",
                  fontSize: 18,
                }}
              >
                {language === 0 ? "son" : language === 1 ? "sound" : "صوت"}
              </Text>
              <Switch
                size="lg"
                colorScheme="white"
                offThumbColor="red.400"
                onThumbColor="green.400"
                onValueChange={toggleSound}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 3,
                borderColor: "white",
                padding: 5,
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
                source={require("../../assets/icons/notes.png")}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "RowdiesBold",
                  fontSize: 18,
                }}
              >
                {language === 0
                  ? "musique"
                  : language === 1
                  ? "music"
                  : "موسيقى"}
              </Text>
              <Switch
                size="lg"
                colorScheme="white"
                offThumbColor="red.400"
                onThumbColor="green.400"
                onValueChange={toggleMusic}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 3,
                borderColor: "white",
                padding: 5,
              }}
            >
              <Image
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
                source={require("../../assets/icons/Language.png")}
              />
              <Text
                style={{
                  color: "white",
                  fontFamily: "RowdiesBold",
                  fontSize: 18,
                }}
              >
                {language === 0
                  ? "langue"
                  : language === 1
                  ? "language"
                  : "لغة"}
              </Text>
              <Pressable onPress={toggleLanguage}>
                <Image
                  style={{ width: 45, height: 45 }}
                  resizeMode={"contain"}
                  source={
                    language === 0
                      ? require("../../assets/flags/flag0.png")
                      : language === 1
                      ? require("../../assets/flags/flag1.png")
                      : require("../../assets/flags/flag2.png")
                  }
                />
              </Pressable>
            </View>
          </View>
          <Pressable
            onPress={() => {
              setShowModal(false);
            }}
            style={{
              height: "10%",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              style={{ height: "90%" }}
              resizeMode="contain"
              source={require("../../assets/icons/Undo.png")}
            />
          </Pressable>
        </View>
      </Modal>
    </Center>
  );
}
