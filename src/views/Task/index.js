// importando bibliotecas do Reac
import React, { useState, useEffect } from 'react';

// Importando bibliotecas do react-native
import {
    View, 
    ScrollView, 
    Image, 
    Text, 
    TextInput, 
    KeyboardAvoidingView,
    TouchableOpacity,
    Switch,
    Button,
    Platform
} from 'react-native';

//import DatePicker from 'react-native-datepicker';
//import DateTimePicker from '@react-native-community/datetimepicker'


// importando o estilo da página
import styles from './style';

// importando os ícones
import typeIcons from '../../utils/typeIcons'

// importando componentes próprios
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import DateTimeInput from '../../componentes/DateTimeInput/index';
import TesteDatepicker from '../../componentes/DateTimeInput/testeDatepicker';
import DateTimePicker from '../../componentes/Teste/index';






export default function Task() {

    const [done, setDone] = useState(false);

    return (

       <KeyboardAvoidingView behavior='padding' style={styles.container}>
           
           {/* CABEÇALHO */}
           <Header showBack={true} />  
            
            <ScrollView style={{width:'100%', marginBottom: 100}}>
                
                {/* Rotina que gera os ícones das tarefas pra escolher */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}} >
                    { 
                      typeIcons.map(icon => ( 
                          icon != null &&  
                                <TouchableOpacity>
                                    <Image source={icon} style={styles.imageIcon}/>
                                </TouchableOpacity>
                      ))
                    }
                </ScrollView>
                
                {/* Rotina que mostra os campos de text e labels a se preencher */}
                <Text style={styles.label}>Título</Text>
                <TextInput 
                    style={styles.input} 
                    maxLength={30} 
                    placeholder="Lembre-me de fazer..." />

                <Text style={styles.label}>Detalhes</Text>
                <TextInput 
                    style={styles.inputArea}
                    multiline={true} 
                    maxLength={200} 
                    placeholder="Detalhes da tarefa" />

                {/* <DateTimeInput type={'date'} />
                <DateTimeInput type={'hour'} /> */}

                {/* <TesteDatepicker type={'date'} date={''} />
                

                <View style={styles.inline}>
                    <View style={styles.inputInline}>
                        <Switch 
                            onValueChange={() => setDone(!done)} 
                            value={done}
                            thumbColor={done ? '#FF8000' : '#20295F'} />
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>EXCLUIR</Text>
                    </TouchableOpacity>
                </View> */}


                <DateTimePicker typeComponent={'date'} />









            </ScrollView>

        {/* RODAPÉ */}
        <Footer icon={'save'} />
       </KeyboardAvoidingView>

    );

}