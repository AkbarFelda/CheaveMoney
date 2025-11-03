import { createContext } from "react";
import { AuthContextType } from "@/types";

const authContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType>(null);

  const login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      let msg = error.message;
      return { success: false, msg };
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      let response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await setDoc(doc(firestore, "users", response?.user?.uid), {
        email,
        name,
        uid: response?.user?.uid,
      });
      return { success: true };
    } catch (error) {
      let msg = error.message;
      return { success: false, msg };
    }
  };
  
  const updateUserData = async (uid:string) => {
    try {
      const docRef = doc(firestore, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await updateDoc(docRef, {
          email: "newemail@example.com",
          name: "New Name",
        });
      }
    } catch (error) {
      let msg = error.message;
      // return { success: false, msg };
      console.log('error', error);
    }
  };
