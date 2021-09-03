import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MemberListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.MemberInfomation}>
        <View style={styles.InfomationContent}>
          <View style={styles.menIcon}>
            <Ionicons name="person-circle-sharp" size={65} color="black" />
          </View>
          <View>
            <Text>Name:山田たかし</Text>
            <Text>Todo:デザイン案作成</Text>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.MemberInfomation}>
        <View style={styles.InfomationContent}>
          <View style={styles.menIcon}>
            <Ionicons name="person-circle-sharp" size={65} color="black" />
          </View>
          <View>
            <Text>Name:山田たかし</Text>
            <Text>Todo:デザイン案作成</Text>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.MemberInfomation}>
        <View style={styles.InfomationContent}>
          <View style={styles.menIcon}>
            <Ionicons name="person-circle-sharp" size={65} color="black" />
          </View>
          <View>
            <Text>Name:山田たかし</Text>
            <Text>Todo:デザイン案作成</Text>
            <Text>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  MemberInfomation: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    marginBottom: 15,
  },
  InfomationContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitle: {
    alignItems: 'center',
    fontSize: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  menIcon: {
    justifyContent: 'space-between',
    marginRight: 45,
  },
});
