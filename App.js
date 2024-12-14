import { StyleSheet, Text, View, FlatList } from 'react-native';
import UserCard from "./src/components/UserCard";

export default function App() {
  const users = [
    {
      id: '1',
      name: 'Alice Johnson',
      avatar: 'https://i.pinimg.com/236x/f3/f7/dc/f3f7dc580642e84036a3a5e00869f3e3.jpg',
      role: 'Developer',
    },
    {
      id: '2',
      name: 'Glek Johnson',
      avatar: 'https://i.pinimg.com/736x/18/fb/ef/18fbef1eb60f96cd27e18f62c7e5af18.jpg',
      role: 'Berserk',
    },
    {
      id: '3',
      name: 'Water Write',
      avatar: 'https://i.pinimg.com/736x/1f/e6/b1/1fe6b14fa99ac754d6f17a2c1c97aa74.jpg',
      role: 'Chemistry Teacher',
    },
  ];

  const renderItem = ({item}) => (
      <UserCard
          user={item}
      />
  );

  return (
      <View style={styles.container}>
        <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingVertical: 8 }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
