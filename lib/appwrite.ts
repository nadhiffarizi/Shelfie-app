
import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68313d52001353ed5431')
    .setPlatform('dev.nadhif.shelfie');

export const account = new Account(client)
export const avarts = new Avatars(client)