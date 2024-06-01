import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
import { AntDesign, FontAwesome, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const width = Dimensions.get('window').width;

export default function Perfil() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/comida.jpg')}
                    style={{ width: '100%' }}
                    resizeMode="repeat"
                />
            </View>

            <Animatable.View delay={1000} animation="fadeIn" style={styles.imageView}>
                <TouchableOpacity style={styles.image}>
                    <Image
                        source={require('../../assets/thiago.png')}
                        style={{ width: '100%' }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <ScrollView>
                    <View style={styles.containerName}>
                        <View style={styles.name}>
                            <Text style={styles.text}>Thiago Justino</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="credit-card" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Pagamento</Text>
                                <Text style={styles.subTitle}>Formas de Recebimento</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="bell" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Notificações</Text>
                                <Text style={styles.subTitle}>Gerencie suas notificações</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Feather name="edit-3" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>Alterar Dados</Text>
                                <Text style={styles.subTitle}>Altere seu e-mail, senha, telefone</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="comment-question-outline" style={styles.iconsStyle} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={styles.text}>FAQ</Text>
                                <Text style={styles.subTitle}>Perguntas Frequentes</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </Animatable.View>
        </SafeAreaView>
    );
}

