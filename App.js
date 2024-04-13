import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';


export default function App() {
  return (
    <>
    <View style={styles.container}>

      <Text style={styles.titleText}>Edwin's profile page</Text>

      {/* this app only accepts png imgages */}
      <Image source={require('./assets/logo.png')} style={{width: 50, height: 50}}/>

      <ScrollView style={{height: 50 ,marginHorizontal: 5}}>
        <Text style={{marginTop: 20}}>
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
        </Text>

        <Text style={{marginTop: 20}}>
          More random words for filler purposes.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
        </Text>

        <Text style={{marginTop: 20}}>
          I can't think of anything to say right now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
        </Text>

        <Text style={{marginTop: 20}}>
          I am typing right now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
        </Text>

        <Text style={{marginTop: 20}}>
          Really random things for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
          This is some random text to fill up space for now.
        </Text>

      </ScrollView>

      <View >
        <TextInput style={{ borderWidth: 1, padding: 10, margin: 10 }} placeholder= "Enter Name here" />

        <TextInput style={{ borderWidth: 1, padding: 10, margin: 10 }} placeholder= "Comment here" />

        <Text style={{ borderWidth: 1, padding: 10, margin: 10, textAlign: 'center',  }}>Submit</Text>
      </View>

    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    height: 300,
    marginTop: 100,
    marginHorizontal: 25,
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },


});
