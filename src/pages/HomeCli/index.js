import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import styles from './styles';

import { useNavigation } from '@react-navigation/native'

import * as Animatable from 'react-native-animatable'

const rest = [
    {
        codigo_rest: 1,
        codigo_categoria: 1,
        name_rest: 'Outback SteakHouse',
        imagem_rest: require('../HomeCli/outback.png'),
        descricao_rest: 'Outback SteakHouse \n Av. Dos Autonomistas, 1400 - Osasco'
    },
    {
        codigo_rest: 2,
        codigo_categoria: 2,
        name_rest: 'Casa Do Porco',
        imagem_rest: require('../HomeCli/Casa-do-Porco.png'),
        descricao_rest: 'Casa Do Porco \n R. Araújo, 124 - República, São Paulo'
    },
    {
        codigo_rest: 3,
        codigo_categoria: 3,
        name_rest: 'Habib’s',
        imagem_rest: require('../HomeCli/habibs.jpg'),
        descricao_rest: 'Habib’s \n R. Cerro Corá, 307 - Lapa, São Paulo'
    },
    {
        codigo_rest: 4,
        codigo_categoria: 4,
        name_rest: 'Fogo de Chão',
        imagem_rest: require('../HomeCli/fogo-de-chao.jpg'),
        descricao_rest: 'Fogo de Chão \n R. Augusta, 2077 - Cerqueira César, SP'
    },
];


const RestItem = ({ item, navigation }) => {
    return (
        <View style={styles.containerImage}>
            <TouchableOpacity onPress={() => navigation.navigate('DetailsCli')} >
                <Image
                    style={styles.image}
                    source={item.imagem_rest}
                />
            </TouchableOpacity>

            <Text style={styles.text}>
                {item.nome_rest}
            </Text>

            <Text style={styles.text} numberOfLines={2}>
                {item.descricao_rest}
            </Text>

        </View>
    );

}
export default function HomeCli() {
    const navigation = useNavigation();
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(rest);

    useEffect(() => {
        if (searchText === '') {
            setList(rest);
        } else {
            setList(
                rest.filter(
                    (item) =>
                        item.name_rest.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...rest];

        newList.sort((a, b) => (a.name_rest > b.name_rest ? 1 : b.name_rest > a.name_rest ? -1 : 0));

        setList(newList);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={styles.container}>
                <View style={styles.actionRow}>
                    <TouchableOpacity>
                        <View style={styles.searchBtn}>
                            <Ionicons name="search" size={24} />
                            <TextInput
                                placeholder="Pesquise uma pessoa"
                                placeholderTextColor="#888"
                                value={searchText}
                                onChangeText={(t) => setSearchText(t)}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterBtn}>
                        <Ionicons name="options-outline" size={24} color={'#fff'} />
                    </TouchableOpacity>
                </View>

            </View>

            <SafeAreaView style={styles.containerFlat}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => <RestItem item={item} navigation={navigation} />}
                    ListEmptyComponent={<Text>A LISTA DE PRODUTOS ESTÁ VAZIA</Text>}
                    keyExtractor={(list) => list.codigo_rest}
                />

            </SafeAreaView>


        </SafeAreaView>
    );
}


