import React, { useCallback } from "react";
import { Button, Image, StyleSheet, TextInput } from "react-native";

import Colors from "../constants/Colors";
import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import { Avatar } from "@rneui/themed";
import { router } from "expo-router";

export default function EditScreenInfo({ path }: { path: string }) {
  const handlePress = useCallback(() => {
    router.push("/home");
  }, []);

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Avatar
          size={64}
          rounded
          icon={{ name: "apartment", type: "material", color: "#009688" }}
          containerStyle={{
            borderColor: "grey",
            borderStyle: "solid",
            borderWidth: 1,
          }}
        />
        <Image
          source={{ uri: "https://reactjs.org/logo-og.png" }}
          style={{ width: 400, height: 400 }}
        />
        <Button title="Homeへ戻る" onPress={handlePress} />
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            color: "white",
          }}
          defaultValue="You can type in me"
        />
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Open up the code for this screen:
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Change any of the text, save the file, and your app will automatically
          update.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
        >
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making
            changes
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
