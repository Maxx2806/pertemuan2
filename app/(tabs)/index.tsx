import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* SECTION FOTO */} 
      <Image 
        source={require("../../assets/images/gambar29.jpg")}
        style={styles.profilePic} 
      />

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Maxwell Osse Tarigan</Text>
      <Text style={styles.nim}>NIM : 243303621224</Text>
      <Text style={styles.jurusan}>Jurusan : Sistem Informasi</Text>

      {/* SECTION BIO */}
      <View style={styles.bioCard}>
        <Text style={styles.bioText}>
          ✨Do the best you can until you know better.Then when you know better, do better!✨
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#221921',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePic: {
    width: 140,
    height: 140,
    borderRadius: 70, // Bikin jadi bulat
    borderWidth: 3,
    borderColor: '#ffffff',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 5,
  },
  nim: {
    fontSize: 14,
    color: '#f0daf1',
    marginBottom: 10,
    letterSpacing: 2,
  },
  jurusan: {
    fontSize: 14,
    color: '#f0daf1' ,
    marginBottom: 20,
    letterSpacing: 2,
  },
  bioCard: {
    backgroundColor: '#c7adc8',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000000',
    width: '100%',
  },
  bioText: {
    color: '#000000',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});