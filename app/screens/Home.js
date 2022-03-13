import { NativeBaseProvider } from "native-base";
import { Image, StatusBar, Text, View } from "react-native";
import Header from "../components/Header";
import SelectMode from "../components/SelectMode";
import { useSelector } from "react-redux";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import colors from "../colors";

export default function Home({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const [sound, setSound] = useState(null);
  const setup = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/music.mp3"),
        { isLooping: true }
      );
      setSound(sound);
      if (music) await sound.playAsync();
    } catch (e) {
      throw e;
    }
  };
  const play = async () => {
    try {
      await sound.playAsync();
    } catch (e) {
      throw e;
    }
  };
  const pause = async () => {
    try {
      await sound.pauseAsync();
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    setup();
  }, []);
  useEffect(() => {
    if (sound)
      if (music) {
        play();
      } else {
        pause();
      }
  }, [music]);
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
  return (
    <NativeBaseProvider>
      <StatusBar translucent={true} backgroundColor={colors.YELLOW} />
      <View style={{ backgroundColor: "white", minHeight: "100%" }}>
        <Header />
        <SelectMode />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginLeft: 30, position: "relative" }}>
            <Image
              style={{
                width: 170,
                height: 170,
                marginLeft: 20,
                transform: [{ rotate: "180deg" }],
              }}
              resizeMode="contain"
              source={require("../../assets/images/bubble.png")}
            />
            <Text
              style={{
                position: "absolute",
                fontSize: 20,
                fontFamily: "RowdiesBold",
                color: "white",
                textAlign: "center",
                top: 60,
                width: 100,
                left: 40,
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "choisis un mode"
                : profiles[selectedProfile].language === 1
                ? "choose a mode"
                : "اختر وضع اللعب"}
            </Text>
          </View>
          <View>
            <Image
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
              source={require("../../assets/images/kid.png")}
            />
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
