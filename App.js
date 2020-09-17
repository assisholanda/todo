import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Desabilita os alertas no app
console.disableYellowBox = true;

// importando as visões do app
import Home from './src/views/Home';
import Task from './src/views/Task'

export default function App() {
  return <Task />
}


