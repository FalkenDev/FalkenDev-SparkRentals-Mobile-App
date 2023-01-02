import { API_KEY } from '@env';
import config from '../config/config.json';
import storage from './storage';

const userModel = {
    getUserData: async function getUserData(userData) {
        const token = await storage.readToken();                
        const user = userData['userData']
        
        const response = await fetch(`${config.base_url}users/${user['id']}?api_key=${API_KEY}`, {
            method: 'GET',
            headers: {
                'x-access-token': token['token']
            }
        });
        
        const result = await response.json();

        return result;
    },

    getBalance: async function getBalance(): Promise<any> {
        const userData = await storage.readUser();        
        const user = await userModel.getUserData(userData);

        const userBalance = user['user']['balance'];
        
        return userBalance;
    },

    getHistory: async function getHistory(): Promise<any> {
        const userData = await storage.readUser();        
        const user = await userModel.getUserData(userData);

        const userHistory = user['user']['history'];
        
        return userHistory;
    },

    addFunds: async function addFunds(prepaid: string): Promise<any> {
    const token = await storage.readToken();
    const user = await storage.readUser();        
    const userData = await userModel.getUserData(user);

    const userId = userData['user']['_id'];

    const requestBody = {
        'prepaid_code': prepaid,
        'user_id': userId
    };
    

    const response = await fetch(`${config.base_url}users/addfund?api_key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'x-access-token': token['token']
        },
        body: JSON.stringify(requestBody)
    });

    const result = await response.json();
    
    return result;
    // users/addfund
    // user_id och prepaid_code
    }
};

export default userModel;