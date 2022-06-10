import { firebase } from '@react-native-firebase/database';

export const databaseRef = () => firebase
  .app()
  .database('https://pokebagapp-default-rtdb.asia-southeast1.firebasedatabase.app/');
