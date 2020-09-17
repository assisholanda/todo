// IMPORTAÇÃO DE BIBLIOTECAS NATIVAS REACT E REACT NATIVE
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// IMPORTAÇÃO DO ESTILO
import styles from './styles';

// IMPORTAÇÃO DOS ÍCONES E LOGO
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import qrcode from '../../assets/qrcode.png'
import back from '../../assets/back.png'

export default function Header({ showNotification, showBack, pressNotification, late}) {
    return (
        /* Content geral do cabeçalho */
        <View style={styles.header}>
           
           {/* Rotina pra mostrar o ícone do Qrcode ou o ícone de voltar, de acordo com que página o usuário está*/} 
           {
             showBack ?     
                <TouchableOpacity style={styles.leftIcon}>
                    <Image source={back} style={styles.leftIconImage} />
                </TouchableOpacity>
             :
            <TouchableOpacity style={styles.leftIcon}>
                <Image source={qrcode} style={styles.leftIconImage} />
            </TouchableOpacity>
            }
           
            {/* Imagem da logo */}
             <Image source={logo} style={styles.logo} />


            {/* Rotina pra mostrar ou não o ícone de notificaçoes, de acordo com qual página o usuário está */}
            { 
              showNotification && late > 0 &&
                <TouchableOpacity style={styles.notification} onPress={pressNotification} >
                    <Image source={bell} style={styles.notificationImage} />
                    <View style={styles.circle}>
                        <Text style={styles.notificationText}>{late}</Text>
                    </View>
                </TouchableOpacity>  

            }
            

        </View>
    )
}