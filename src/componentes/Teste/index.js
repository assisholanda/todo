import React, {useState} from 'react';
import {View, Button, Platform, TouchableOpacity, TextInput, Image} from 'react-native';
//import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import DateTimePickerModal from 'react-native-modal-datetime-picker';


import styles from './styles';


import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';


export default function ComponentDateTimePicker( { typeComponent } ) {
    
        
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  if(typeComponent == 'time') {
      

  }

  //alert('entrou, show = ' +show)

  const onChange = (event, selectedDate) => {
    alert('parametro é hora: ' + date);
    setShow(false);
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => { 
    console.log('Entrou no showDatePicker, show é =' + show);
    if(show == true) {
        setShow(false)
        console.log('Entrou no if show == true, show agora é =' + show);
      }else {
        setShow(true)
        console.log('Entrou no else, show agora é =' + show);
      }
      console.log('antes de mostrar o showMode, show agora é =' + show);
      showMode('date');

  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      {/* <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View> */}
      
      <View>
      <TouchableOpacity style={styles.datePlace} onPress={ typeComponent == 'date' ? showDatepicker : showTimepicker} >
            <TextInput 
                style={styles.input} 
                editable={false}
                value={`Variável é : ${date}`} 
            />
            <Image 
                style={styles.iconTextInput} 
                source={ typeComponent == 'date' ?  iconCalendar : iconClock } 
            />
        </TouchableOpacity>

      </View>

         {/*  {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )} */}
    </View>
  );
};