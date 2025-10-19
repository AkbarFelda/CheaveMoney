import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Typo from "@/components/Typo";
import { colors, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import ScreenWrapper from "@/components/ScreenWrapper";
import Button from "@/components/Button";

const Onboard = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Image & Login Button */}
        <View>
          <TouchableOpacity style={styles.loginButton}>
            <Typo fontweight={"500"}>Sign In</Typo>
          </TouchableOpacity>
          <Image
            source={require("@/assets/images/welcome.png")}
            style={styles.welcomeImage}
            resizeMode="contain"
          />
        </View>
        {/* Footer */}
        <View style={styles.footer}>
          <View style={{ alignItems: "center"}}>
            <Typo size={30} fontweight={"800"}>Always take control</Typo>
            <Typo size={30} fontweight={"800"}>of your finances</Typo>
          </View>

          <View style={{ alignItems: "center", gap: 2 }}>
            <Typo size={17} color={colors.textLight}>
              Manage your expenses, track your spending
            </Typo>
            <Typo size={17} color={colors.textLight}>
              and achieve your financial goals with ease
            </Typo>
          </View>
          {/* Button */}
          <View style={styles.buttonContainer}>
            <Button>
              <Typo size={20} fontweight={"600"} color={colors.neutral900}>Get Started</Typo>
            </Button>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: spacingY._7,
  },

  welcomeImage: {
    width: "100%",
    height: verticalScale(300),
    alignSelf: "center",
    marginTop: verticalScale(100),
  },

  loginButton: {
    alignSelf: "flex-end",
    marginRight: spacingY._20,
  },

  footer: {
    backgroundColor: colors.neutral900,
    alignItems: "center",
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(45),
    gap: spacingY._20,
    shadowColor: "white",
    shadowOffset: { width: 0, height: -10 },
    elevation: 10,
    shadowRadius: 25,
    shadowOpacity: 0.15,
  },

  buttonContainer: {
    width: "100%",
    paddingHorizontal: spacingY._25,
  },
});
