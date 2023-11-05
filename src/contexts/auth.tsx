import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type User = {
  email?: string;
  password?: string;
};

type AuthContextType = {
  user: User;
  login: (email: string, password: string) => void;
  logout: () => void;
  setUserDetails: (details: Partial<User>) => void;
  checkLoggedIn: () => boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({});

  const login = (email: string, password: string) => {
    localStorage.setItem('loggedIn', 'true');
    setUser({ email, password });
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    setUser({ email: '', password: '' });
  };

  const setUserDetails = (details: Partial<User>) => {
    setUser({ ...user, ...details });
  };

  const checkLoggedIn = () => {
    const isLoggedIn = localStorage.getItem('loggedIn');
    return isLoggedIn === 'true';
  };

  useEffect(() => {
    if (user?.email && user?.password) {
      localStorage.setItem('loggedIn', 'true');
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, setUserDetails, checkLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};

export default AuthProvider;
export { useAuth };
