import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Laws & Regulations</Text>
     
      <ScrollView style={styles.container1}>
      <Text style={styles.header}>Traffic Rules and Fines</Text>
      <Text style={styles.subHeader}>Updated Motor Vehicles Act, 2019</Text>
      <Text style={styles.content}>
        The government has amended The Motor Vehicles Act, 2019, introducing stricter traffic rules and higher penalties for violations such as driving without insurance or disregarding traffic lights.
      </Text>
      <Text style={styles.subHeader}>Road Safety Rules for Pedestrians</Text>
      <Text style={styles.content}>
        Pedestrians should watch for traffic lights, avoid using mobile phones while walking, use zebra crossings, and follow pedestrian traffic light rules.
      </Text>
      <Text style={styles.subHeader}>Rules for Cyclists and Drivers</Text>
      <Text style={styles.content}>
        Cyclists and drivers should adhere to traffic signals, avoid driving under the influence, not use mobile phones while driving, follow speed limits, and respect "No Entry" zones.
      </Text>
      <Text style={styles.subHeader}>Importance of Traffic Rules</Text>
      <Text style={styles.content}>
        Traffic rules are crucial in India due to the high number of vehicles on the road, ensuring smooth traffic flow and safety for all road users.
      </Text>
      {/* Add more sections as needed */}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container1: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
});
