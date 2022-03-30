import { Center, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../colors";
import { changeLanguageUser } from "../redux/userSlice";

export default function ProfilesManager({ language, navigation }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? colors.SECOND + "90" : colors.SECOND,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              borderBottomWidth: 2,
              borderBottomColor: colors.SECOND,
              fontSize: language === 2 ? 20 : 18,
            }}
          >
            {language === 0
              ? "gérer mes profils"
              : language === 1
              ? "manage my profiles"
              : "إدارة صفحاتي الشخصية"}
          </Text>
        )}
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
            <View
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
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 18 : 16,
                }}
              >
                {language === 0
                  ? "Getions des profils"
                  : language === 1
                  ? "Profiles manager"
                  : "إدارة صفحاتي الشخصية"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.MAIN,
              height: "75%",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable
              style={{
                flexDirection: language === 2 ? "row-reverse" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "white",
                borderBottomWidth: 2,
                padding: 10,
                width: "80%",
              }}
              onPress={() => navigation.push("AddProfile")}
            >
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 22 : 20,
                  color: "white",
                }}
              >
                {language === 0
                  ? "Ajouter un profil"
                  : language === 1
                  ? "Add a profile"
                  : "إضافة صفحة شخصية"}
              </Text>
              <Image
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
                source={require("../../assets/icons/settings.png")}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: language === 2 ? "row-reverse" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "white",
                borderBottomWidth: 2,
                width: "80%",
                padding: 10,
              }}
              onPress={() => navigation.push("ModifyProfile")}
            >
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 22 : 20,
                  color: "white",
                }}
              >
                {language === 0
                  ? "Modifier un profil"
                  : language === 1
                  ? "Modify a profile"
                  : "تعديل صفحة شخصية"}
              </Text>
              <Image
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
                source={require("../../assets/icons/settings.png")}
              />
            </Pressable>
            <Pressable
              style={{
                flexDirection: language === 2 ? "row-reverse" : "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomColor: "white",
                borderBottomWidth: 2,
                width: "80%",
                padding: 10,
              }}
              onPress={() => navigation.push("DeleteProfile")}
            >
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 22 : 20,
                  color: "white",
                }}
              >
                {language === 0
                  ? "Supprimer un profil"
                  : language === 1
                  ? "Delete a profile"
                  : "إزالة صفحة شخصية"}
              </Text>
              <Image
                resizeMode="contain"
                style={{ width: 40, height: 40 }}
                source={require("../../assets/icons/settings.png")}
              />
            </Pressable>
            <View
              style={{
                flexDirection: language === 2 ? "row-reverse" : "row",
                width: "80%",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "white",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 20 : 18,
                }}
              >
                {language === 0
                  ? "langue"
                  : language === 1
                  ? "language"
                  : "لغة"}
              </Text>
              <Pressable onPress={() => dispatch(changeLanguageUser())}>
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