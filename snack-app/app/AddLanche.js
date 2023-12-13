import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, LogBox, FlatList, Image } from "react-native";
import { useNavigation, useRouter } from 'expo-router';
import { AntDesign, SimpleLineIcons, Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'expo-image-picker';
import { Uploading } from "../components/Uploading"
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { storage, db } from "../connections_leticia/firebase-store";
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export default function AddLanche() {
    const nav = useNavigation();
    const [image, setImage] = useState("");
    const [progress, setProgress] = useState("");
    const [files, setFiles] = useState([]);
    const [url, setUrl] = useState("");

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            const reference = ref(storage, "Stuff");
            await getDownloadURL(reference).then((x)=> {
                setUrl(x);
            })
        }

        func ();
    }, []);

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            await uploadImage(result.assets[0].uri, "image")
        }
    }

    async function uploadImage(uri, fileType) {
        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, "Stuff/" + new Date().getTime());
        const uploadTask = uploadBytesResumable(storageRef, blob);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload está " + progress + " % pronto");
                setProgress(progress.toFixed());
            },
            (error) => {
                //handle error
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    console.log("Arquivo disponível em", downloadURL);
                    await saveRecord(fileType, downloadURL, new Date().toISOString());
                    setImage("");
                });
            }
        );
    }

    async function saveRecord(fileType, url, createdAt) {
        try {
            const docRef = await addDoc(collection(db, "files"), {
                fileType,
                url,
                createdAt,
            });
            console.log("document saved correctly", docRef.id);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.superior}>
                <TouchableOpacity >
                    <Icon name={'chevron-left'} size={30} color='#AE7CD4' onPress={() => nav.navigate('Cardapio')} />
                </TouchableOpacity>
                <Text>superior</Text>
            </View>
            <ScrollView style={styles.meio}>
                
                {image && <Uploading image={image} progress={progress} />}
                <Text style={styles.txt}>Nome do produto</Text>
                <TextInput style={styles.input} />

                <Text style={styles.txt}>Valor</Text>
                <TextInput style={styles.input} />

                <Text style={styles.txt}>Descrição</Text>
                <TextInput style={styles.input} />

                <TouchableOpacity style={styles.botImg} onPress={pickImage}>
                    <AntDesign name="pluscircleo" size={30} marginRight={20} marginLeft={-20} />
                    <Text style={styles.textoBotao}>ADICIONAR IMAGEM</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao}>
                    <AntDesign name="checkcircle" size={40} color="green" />
                </TouchableOpacity>
                <Image
                style={{ width: 200, height: 200 }}
                source={{ uri: url }}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#011837'
    },

    input: {
        borderWidth: 1,
        borderRadius: 15,
        height: 40,
        width: 300,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor: '#fff',
        alignSelf: 'center'
    },
    txt: {
        color: '#fff',
        fontSize: 20,
        paddingLeft: 8,
        marginBottom: 5,
        marginLeft: 55
    },
    meio: {
        flex: 2,
        width: '100%',
        height: '100%',
        paddingTop: 100
    },

    botImg: {
        width: '70%',
        backgroundColor: 'white',
        height: 80,
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    superior: {
        flex: 0.1,
        paddingBottom: 30,
        marginRight: 50,
        alignSelf: 'left',
        paddingTop: 30,
        width: '100%',
        height: '100%',
        paddingLeft: 10
    },
    textoBotao: {
        fontSize: 20
    },
    botao: {
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20
    }

})

