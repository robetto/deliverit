import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";

type AuthData = {
    session: Session | null;
};

const AuthContext = createContext<AuthData>({
    session: null,
});

export default function AuthProvider({ children }: PropsWithChildren) {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const result = await supabase.auth.getSession();

            const { data } = await supabase.auth.getSession();
            setSession(data.session);
        };

        fetchSession();
    }, []);

    return (
        <AuthContext.Provider value={{ session }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    useContext(AuthContext);
};
