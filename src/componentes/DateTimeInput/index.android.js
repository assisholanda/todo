import React, { useState, useEffect } from 'react';
import {
    Image, 
    TouchableOpacity, 
    TextInput, 
    Platform
 } from 'react-native';

 import { format } from 'date-fns';

 //Date Time Picker
 import DateTimePicker from 'react-native-datepicker';
 

 //ESTILOS
import styles from './styles';

//ICONES
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';
 
export default function TimePicker({ type }) {
    const [dateTime, setDateTime] = useState(new Date());
    const [hourTime, setHourTime] = useState(new Date());
    const [show, setShow] = useState(false);
    const [displayMode, setDisplayMode ] = useState();
    const [hourDisplay, setHourDisplay] = useState();
    const [dateDisplay, setDateDisplay] = useState();
 
    const getCorrectDate = () => {
        if(type == 'date'){
            setDateDisplay((format(new Date(dateTime), 'dd/MM/yyyy')));
            console.log("é dateTime");
            return setDateDisplay;
        }else{
            setHourDisplay(format(new Date(hourTime), 'HH:mm'));
            console.log("é hourTime");
            return hourDisplay;
        };
    };
 
    const activateTimePicker = () => {
        setShow(true);
        if(type == 'date'){
            {Platform.OS === 'android' ? setDisplayMode('calendar') : setDisplayMode('default'); }
        }else{
            {Platform.OS === 'android' ? setDisplayMode('clock') : setDisplayMode('default'); }
            
        };        
    };
 
    const selectDateOrHour = (event,  selectedDate) =>{
        const currentDate = selectedDate;
        setShow(false);
        if (event.type != "dismissed"){          
            if(type == 'date'){
                console.log(currentDate);
                setDateTime(currentDate);
            }else{
                console.log(currentDate);
                setHourTime(currentDate);
            };
        }
    };
 
    useEffect(() => {
        getCorrectDate()
    },[dateTime, hourTime])
 
    return (
        <TouchableOpacity style={styles.datePlace} onPress={activateTimePicker}>
            <TextInput 
                style={styles.input} 
                editable={false}
                value={type == 'date' ?  dateDisplay : hourDisplay} 
            />
            <Image 
                style={styles.iconTextInput} 
                source={ type == 'date' ?  iconCalendar : iconClock } 
            />
            <>
                {show && (
                        <DateTimePicker
                        value = {type == 'date' ?  dateTime : hourTime}
                        mode={type}
                        is24Hour={true}
                        display={displayMode}
                        onChange={selectDateOrHour}
                        />
                )}               
            </>
        </TouchableOpacity>
        
    )
}   