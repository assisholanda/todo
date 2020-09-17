// IMPORTAÇÃO DE BIBLIOTECAS NATIVAS REACT E REACT NATIVE
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO DO ESTILO
import styles from './styles';

// IMPORTAÇÃO DOS ÍCONES
import add from '../../assets/add.png'
import save from '../../assets/save.png'


export default function Footer( {icon} ) {
    return (
        /* Content geral do rodapé */
        <View style={styles.container}>
           
           <TouchableOpacity style={styles.button}>
               <Image source={icon == 'add' ? add : save} style={styles.image} />
           </TouchableOpacity>                     

            <Text style={styles.text}>
                Organizando sua vida
            </Text>

        </View>
    )
}