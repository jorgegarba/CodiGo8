import SafeAreaView from 'react-native-safe-area-view';
import { DrawerItems } from 'react-navigation-drawer';
import { View, StyleSheet, ScrollView } from 'react-native';
import React from 'react';

const CustomDrawer = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      {/* Aqui */}
      <View style={styles.headerContainer}>
        <View style={styles.circulo}>

        </View>
      </View>

      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  circulo: {
    height: 100,
    width: 100,
    borderRadius: 75,
    borderColor: '#B38A7D',
    borderWidth: 2
  },
  container: {
    flex: 1,

    // backgroundColor: '#B3524B'
  },
  headerContainer: {
    height: 200,
    backgroundColor: '#82B5A9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default CustomDrawer;