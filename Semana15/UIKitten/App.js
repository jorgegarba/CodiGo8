import React, { useState } from "react";
import {
  AccessibilityRole,
  ImageProps,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  View,
  Text as RNText
} from "react-native";
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { mapping, light, dark } from "@eva-design/eva";

const heartIcons = ["😻", "💖", "😍", "🥰", "😍", "💝", "😘", "💓", "💕", "🐱"];
const themes = {
  light: {
    theme: light,
    icon: "sun",
    text: "LIGHT"
  },
  dark: {
    theme: dark,
    icon: "moon",
    text: "DARK"
  }
};

const renderIcon = ({ name, style }) => <Icon {...style} name={name} />;

const CustomButtonWithIcon = ({
  accessibilityRole,
  accessibilityLabel,
  icon,
  iconStyle,
  onPress,
  text,
  style
}) => {
  const ButtonIcon = () => renderIcon({ name: icon, style: iconStyle });
  return (
    <Button
      style={style}
      icon={ButtonIcon}
      onPress={onPress}
      accessibilityRole={accessibilityRole}
      accessibilityLabel={accessibilityLabel}
    >
      {text}
    </Button>
  );
};

const App = () => {
  //guardar tema e iconitos con Hooks
  const [icon, setIcon] = useState(heartIcons[0]);
  const [themeName, setThemeName] = useState("light");
  const theme = themes[themeName].theme;
  //cambiar icono aleatoriamente
  const changeIcon = () => {
    const index = Math.floor(Math.random() * heartIcons.length);
    setIcon(heartIcons[index]);
  };

  const changeTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
  };

  const { text: themeButtonText, icon: themeButtonIcon } =
    themeName === "light" ? themes.dark : themes.light;

  return (
    <>
      //Iconregistry tiene la apariencia de un registro de los iconos que va a
      utilizar el proyecto
      <IconRegistry icons={EvaIconsPack} />
      //Al parecer tiene que ser o si el contenedor inicial
      <ApplicationProvider mapping={mapping} theme={theme}>
        <Layout style={styles.container}>
          <Text style={styles.text} category="h1">
            Welcome to UI Kitten {icon}
          </Text>
          <Text style={styles.text} category="s1">
            It works great in the browser and as a native app!
          </Text>
          <Text style={styles.text} appearance="hint">
            Click some buttons to see it working.
          </Text>
          <Button
            accessibilityRole="button"
            accessibilityLabel="Change Icon"
            style={styles.iconButton}
            onPress={changeIcon}
          >
            CHANGE ICON
          </Button>
          <CustomButtonWithIcon
            accessibilityRole="button"
            accessibilityLabel="UI Kitten Change Theme"
            style={styles.iconButton}
            text={`Cambiar a Tema ${themeButtonText} `}
            icon={themeButtonIcon}
            onPress={changeTheme}
            iconStyle={{ tintColor: "white" }}
          />
          //????????????????????????????????????
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel="Native Change Theme"
            onPress={changeTheme}
          >
            <View style={styles.nativeButton}>
              <RNText>NATIVE CHANGE THEME</RNText>
            </View>
          </TouchableOpacity>
        </Layout>
      </ApplicationProvider>
    </>
  );
};

//esto ya son estilos :P
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  text: {
    textAlign: "center"
  },
  iconButton: {
    marginVertical: 16
  },
  nativeButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});

export default App;
