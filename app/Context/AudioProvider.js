import React, { Component,createContext } from 'react'
import { Text, View, Alert } from 'react-native'
import * as MediaLibrary from 'expo-media-library'


export const AudioContext = createContext()

export class AudioProvider extends Component {

    


    constructor(props){
        super(props)
    }
    permissionAlert = () => {
        Alert.alert("Permission Required","Esta app necesita tener acceso a sus archivos de audio!",[{
            text: 'Estoy listo',
            onPress: () => this.getPermission()
        },{
            text:'Cancelar',
            onPress: () => this.permissionAlert()             
        }])
    }

    getAudioFiles = async () => {
        let media = await MediaLibrary.getAssetsAsync({
            mediaType:'audio'
        });

        media = await MediaLibrary.getAssetsAsync({
            mediaType:'audio'
        });

        console.log(media)
    }

    

    getPermission = async() => {

        /*
        {
        "canAskAgain": true,
        "expires": "never",
        "granted": false,
        "status": "undetermined",
        }
    */

        const permission = await MediaLibrary.getPermissionsAsync()
        if (permission.granted){
            //Obtendremos todos los archivos de audio
            this.getAudioFiles()
        }
        
        if(!permission.granted && permission.canAskAgain){
            const {status,canAskAgain}= await MediaLibrary.requestPermissionsAsync()

            if(status=='denied' && canAskAgain){
                //Mostrará una ventana de alerta que el usuario debe de permitir para que el reproductor funcione
                this.permissionAlert()
            }

            if(status=='granted'){
                //Obtendremos todos los archivos de audio
                this.getAudioFiles()
            }

            if(status=='denied' && !canAskAgain){
                //Mostrará una ventana de alerta o error para el usuario
            }
        }
    }

    componentDidMount(){
        this.getPermission()
    }

    render() {
        return <AudioContext.Provider value={{}}>
            {this.props.children}
        </AudioContext.Provider>
    }
}

export default AudioProvider
