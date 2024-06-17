import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"

export function Home ()  {
  return (
    <>
      <StatusBar backgroundColor="#0F172A" barStyle="light-content" />

      <SafeAreaView style={styles.container}>
        <Text>
          Sujeito Programador
        </Text>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0F172A",
        paddingLeft: 14,
        paddingRight: 14, 
        paddingTop: 14, 
    },
})
