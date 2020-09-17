import React, { useState, useEffect } from 'react';

import {
    TouchableOpacity, 
    Image, 
    TextInput,
    DatePickerAndroid,
    TimePickerAndroid,  
    Alert,
    View,
  } from 'react-native'
  
  import DatePicker from 'react-native-datepicker';
  import { format, isPast } from 'date-fns';
  
  import styles from './styles';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function testeDatepicker({ type, date }){
  
    const [datetime, setDateTime] = useState();
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      if(type == 'date' && date){
        setDateTime(format(new Date(date), 'dd/MM/yyyy'));
        //save(format(new Date(date), 'yyyy-MM-dd'));
      }
  
      if(type == 'hour' && hour){
        setDateTime(format(new Date(hour), 'HH:mm'));
        //save(format(new Date(hour), 'HH:mm:ss'));
      }
    },[])
  
    const activateTimePicker = () => {
        setShow(true);
        alert('clicou no activate');
        if(type == 'date'){
            //{Platform.OS === 'android' ? setDisplayMode('calendar') : setDisplayMode('default'); }
            alert('tipo é data');
        }else{
            //{Platform.OS === 'android' ? setDisplayMode('clock') : setDisplayMode('default'); }
            alert ('tipo é hora');
        };    
    };

    async function selectDataOrHour(){
      
      if(type == 'date'){
        alert('clicou: date')
        const {action, year, month, day} = await DatePicker.open({
            mode: 'calendar'
          });



      }else{
        

      }
    }
  
    return(
        
     <View>
      <TouchableOpacity onPress={activateTimePicker}>
        <TextInput 
        style={styles.input} 
        placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...' }
        editable={false}
        value={datetime}
        />
        <Image 
        style={styles.iconTextInput} 
        source={type == 'date' ? iconCalendar : iconClock} />
      </TouchableOpacity>

      <TouchableOpacity onPress={activateTimePicker}>
        <TextInput 
        style={styles.input} 
        placeholder={type == 'date' ? 'Clique aqui para definir a data...' : 'Clique aqui para definir a hora...' }
        editable={false}
        value={datetime}
        />
        <Image 
        style={styles.iconTextInput} 
        source={type == 'date' ? iconCalendar : iconClock} />

        <>
            {show && (

                    <DatePicker 
                    value = {type == 'date' ?  '01/01/2020' : '10:00'}
                    mode="date"
                    is24Hour={true}
                    iconSource="locale"
                    onChange={selectDataOrHour}
                    />

            )}               
        </>

      </TouchableOpacity>
      
      </View>   
      

    )
  
  }