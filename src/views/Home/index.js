import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';


// Estilos
import styles from './styles'

// COMPONENTES
import Header from '../../componentes/Header';
import Footer from '../../componentes/Footer';
import TaskCard from '../../componentes/TaskCard';
import api from '../../services/api';


export default function Home() {

    // Variáveis de estado
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();

    async function loadTasks() {

        setLoad(true);
        await api.get(`/task/filter/${filter}/10:10:10:10:10`)
        .then(response => {
            setTasks(response.data)
            setLoad(false);
        });

    }

    async function lateVerify() {

        await api.get(`/task/filter/late/10:10:10:10:10`)
        .then(response => {
            setLateCount(response.data.length);
        });

    }

    function Notification() {
        setFilter('late');
    }

    useEffect(() => {
        loadTasks();
        lateVerify();
        
    }, [filter]) 

    
    return (
        // container de toda a página
        <View style={styles.container}>
            
            {/* componente do cabeçalho */}
            <Header showNotification={true} showBack={false} pressNotification={Notification} late={lateCount} />

                {/* Renderização da parte dos filtros */}
                <View style={styles.filter}>
                    
                    {/* Filtros */}
                    <TouchableOpacity onPress={() => setFilter('all')}>
                        <Text style={filter == 'all' ? styles.filterTextActivied : styles.filterTextInactivied}> 
                            Todos
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => setFilter('today')}>
                        <Text style={filter == 'today' ? styles.filterTextActivied : styles.filterTextInactivied}> 
                            Hoje
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('week')}>
                        <Text style={filter == 'week' ? styles.filterTextActivied : styles.filterTextInactivied}> 
                            Semana
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('month')}>
                        <Text style={filter == 'month' ? styles.filterTextActivied : styles.filterTextInactivied}> 
                            Mês
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setFilter('year')}>
                        <Text style={
                            filter == 'year' ? styles.filterTextActivied :
                            styles.filterTextInactivied
                            }> Ano
                        </Text>
                    </TouchableOpacity>
                     
                </View>

                {/* Rotina pra mudar o título de tarefas e tarefas atrasadas */}
                <View style={styles.title}>
                   {
                        filter == 'late' 
                        ?
                            <Text style={styles.titleTextLate}>TAREFAS ATRASADAS</Text>
                        :    
                            <Text style={styles.titleText}>TAREFAS</Text>
                   }         

                </View>


                {/* Tag que cria uma área de barra de rolagem */}
                <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                  {
                      load 
                      ? 
                        <ActivityIndicator color='#FF8000' size="large" />
                      :    
                      tasks.map(t => 
                        (
                            <TaskCard done={false} title={t.title} when={t.when} type={t.type} />     
                        ))    

                  }          
                    
                </ScrollView>


            {/* componente do rodapé */}
            <Footer icon={'add'}/>
        </View>
    )

}