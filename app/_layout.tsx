import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { HeaderShownContext } from '@react-navigation/elements'
import { AuthProvider } from '@/contexts/authContext'

const StackLayout = () => {
  return <Stack screenOptions={{ headerShown: false }}></Stack>
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Text>RootLayout</Text>
      </Stack>
    </AuthProvider>
  )
}

const styles = StyleSheet.create({})