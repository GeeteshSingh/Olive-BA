import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { usePreventScreenCapture } from 'expo-screen-capture'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

import Searches from './Search'

export default function App() {
  usePreventScreenCapture()
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 45 }}>
        <Searches />
      </View>
      <ScrollView>
        <View style={{ margin: 15 }}>
          <Card>
            <Card.Content>
              <Title>Searched Card</Title>
              <Paragraph>Searches</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
          </Card>
          <View style={{ marginVertical: 15 }}>
            <Card>
              <Card.Content>
                <Title>Searched Card</Title>
                <Paragraph>Searches</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
              <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
              </Card.Actions>
            </Card>
          </View>
        </View>
      </ScrollView>

      <StatusBar style='#C0C0C0' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0'
  }
})
