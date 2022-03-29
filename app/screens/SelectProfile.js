import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import avatars from "../avatars";
import colors from "../colors";
import ProfilesManager from "../components/ProfilesManager";
import { setSelectedProfile } from "../redux/selectedProfileSlice";
export default function SelectProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
  const dispatch = useDispatch();
  // profile pressed handler
  const pressHandler = (id) => {
    const index = profiles.findIndex((profile) => {
      return profile.id === id;
    });
    dispatch(setSelectedProfile({ index }));
    navigation.replace("Intro");
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar
        backgroundColor={"white"}
        translucent={true}
        barStyle={"light-content"}
      />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/strawberry.png")}
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            top: Dimensions.get("window").height / 3,
            right: 25,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/icons/fond1.png")}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: (3 * Dimensions.get("window").height) / 12,
            left: 25,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/icons/cup.png")}
          style={{
            position: "absolute",
            width: 70,
            height: 70,
            top: (11 * Dimensions.get("window").height) / 12,
            left: 25,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (25 * Dimensions.get("window").height) / 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              height: "100%",
            }}
            source={require("../../assets/hero/mystick1.png")}
            resizeMode={"contain"}
          />
        </View>
        <View
          style={{
            height: (20 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width / 2,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "RowdiesBold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Choisir votre profil
          </Text>
        </View>
        <View
          style={{
            borderColor: colors.SECOND,
            borderWidth: 4,
            borderRadius: 50,
            width: (4 * Dimensions.get("window").width) / 5,
            height: (45 * Dimensions.get("window").height) / 100,
            paddingHorizontal: 20,
            overflow: "hidden",
          }}
        >
          <FlatList
            keyExtractor={(_) => _.id}
            showsVerticalScrollIndicator={false}
            data={profiles}
            renderItem={({ item, index }) => (
              <View
                style={{
                  backgroundColor:
                    index % 3 === 0
                      ? colors.COLOR1 + "80"
                      : index % 3 === 1
                      ? colors.COLOR2 + "80"
                      : colors.COLOR3 + "70",
                  borderRadius: 20,
                  marginVertical: 12,
                  borderWidth: 2,
                  borderColor:
                    index % 3 === 0
                      ? colors.COLOR1
                      : index % 3 === 1
                      ? colors.COLOR2
                      : colors.COLOR3,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 5,
                    alignItems: "center",
                  }}
                  onPress={() => pressHandler(item.id)}
                  android_ripple={{
                    color:
                      index % 3 === 0
                        ? colors.COLOR1
                        : index % 3 === 1
                        ? colors.COLOR2
                        : colors.COLOR3,
                  }}
                >
                  <View>
                    <Image
                      source={avatars[item.avatar]}
                      style={{ width: 80, height: 80 }}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text
                      style={{
                        fontFamily: "RowdiesBold",
                        color: "white",
                        fontSize: 18,
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "RowdiesBold",
                        color: "white",
                        fontSize: 18,
                      }}
                    >
                      Niveau {item.level}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: 10,
                        paddingHorizontal: 8,
                      }}
                    >
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontFamily: "RowdiesBold",
                        }}
                      >
                        {item.score}
                      </Text>
                      <Image
                        style={{ height: 20, width: 20 }}
                        resizeMode="contain"
                        source={require("../../assets/icons/gold.png")}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      overflow: "hidden",
                      backgroundColor: "white",
                      borderRadius: 999,
                      borderColor:
                        index % 3 === 0
                          ? colors.COLOR1
                          : index % 3 === 1
                          ? colors.COLOR2
                          : colors.COLOR3,
                      borderWidth: 1,
                    }}
                  ></View>
                </Pressable>
              </View>
            )}
          />
        </View>
        <View
          style={{
            height: Dimensions.get("window").height / 10,
            justifyContent: "center",
          }}
        >
          <ProfilesManager />
        </View>
      </View>
    </View>
  );
}
