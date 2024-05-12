import 'react-native-url-polyfill/auto';
import * as SecureStore from "expo-secure-store";
import { createClient } from '@supabase/supabase-js';

const ExpoSecureStoreAdapter = {
    getItem: (key: string) => {
        return SecureStore.getItemAsync(key);
    },
    setItem: (key: string, value: string) => {
        SecureStore.setItemAsync(key, value);
    },
    removeItem: (key: string) => {
        SecureStore.deleteItemAsync(key);
    },
};

const supabaseUrl = 'https://bxdaexicitgfnyamoqnp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZGFleGljaXRnZm55YW1vcW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU0NTg3NzUsImV4cCI6MjAzMTAzNDc3NX0.1iaRqoALn5uORR2C68IhTWlsgiUoxbpMSxhj-ajTmac';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: ExpoSecureStoreAdapter as any,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});