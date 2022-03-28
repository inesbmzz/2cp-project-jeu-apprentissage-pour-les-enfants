import { useSelector, useDispatch } from "react-redux";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import Profil from "../components/Profil";
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Dimensions,
} from "react-native";
import HomeCard from "../components/HomeCard";
import colors from "../colors";
import { toggleMusic } from "../redux/profilesSlice";

export default function Home({ navigation }) {
  //REDUX
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const dispatch = useDispatch();
  //------------------------------------
  // SOUNDS SETUP
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
  const clickMusicHandler = () => {
    dispatch(toggleMusic({ payload: { selectedProfile } }));
    if (music) {
      play();
    } else {
      pause();
    }
  };
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
  //-----------------------------------------
  return (
    <View>
      <StatusBar translucent={true} barStyle={"light-content"} />
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ padding: 20 }}>
          <View
            style={{
              height: (20 * Dimensions.get("window").height) / 100,
              justifyContent: "center",
            }}
          >
            <Profil />
          </View>
          <View
            style={{
              height: (80 * Dimensions.get("window").height) / 3,
            }}
          >
            <HomeCard
              title={"Accéder à la carte"}
              desc={"commence ta propre histoire"}
              image={require("../../assets/hero/mystick2.png")}
              color={colors.MAIN}
            />
            <HomeCard
              title={"Accéder à la carte"}
              desc={"commence ta propre histoire"}
              image={require("../../assets/hero/mystick3.png")}
              color={colors.SECOND}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
