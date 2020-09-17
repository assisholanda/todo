import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {format} from 'date-fns';


// importação do estilo aplicado a este arquivo
import styles from './styles';

// Coleção de ícones
import typeIcons from '../../utils/typeIcons';


export default function TaskCard({ done, title, when, type }) {
    return (
     
      <TouchableOpacity style={[styles.card, done && styles.done]}> 
            <View style={styles.cardLeft}>
                <Image source={typeIcons[type]} style={styles.typeActivity} />
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
            <View style={styles.cardRight}>
                <Text style={styles.carDate}>{format(new Date(when), 'dd/MM/yyyy')}</Text>
                <Text style={styles.carTime}>{format(new Date(when), 'HH:mm')}</Text>
            </View>
     </TouchableOpacity>  
        
        
    )
}