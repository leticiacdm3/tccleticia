import {Text, View,} from 'react-native';
import ProgressBar from '../components/ProgressBar';
import { Uploading } from '../components/Uploading';

export default function Progresso() {
  return (
    <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
     
      <ProgressBar progress={30}/>
    </View>
  );
}