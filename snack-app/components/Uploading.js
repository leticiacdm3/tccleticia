import {
    Image, 
    Text,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
} from "react-native";
import {BlurView, VibrancyView} from "@react-native-community/blur";
import ProgressBar from "./ProgressBar";

export  function Uploading ({image, video, progress}){
    return(
        <View style={[StyleSheet.absoluteFill, {
            alignItems: 'center', 
            justifyContent: 'center',
            zIndex: 1,
        }]}>
            <View style={styles.viu }>
                {image && (
                    <Image
                    source={{ uri: image}}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                        borderRadius: 6,
                    }}
                    />
                )}
                <Text style={{fontSize: 12}}>Uploading...</Text>
                <ProgressBar progress={progress}/>
                <View
                    style={{
                        height: 1,
                        borderWidth: StyleSheet.hairlineWidth,
                        width: '100%',
                        borderColor: '#00000020',
                    }}>
                </View>
                <TouchableOpacity>
                    <Text style={{ fontWeight: '500', color: '#3478F6', fontSize: 17}}> Cancelar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viu:{
        backgroundColor: '#E8E8E8',
        width: '70%',
        alignItems: 'center',
        paddingVertical: 16,
        rowGap: 12 ,
        borderRadius: 14
    }
})