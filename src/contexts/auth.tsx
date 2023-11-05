import { FC, ReactNode, createContext, useContext, useState } from 'react';

type User = {
  email: string;
  password: string;
};

type AuthContextType = {
  user?: User;
  login?: (email: string, password: string) => void;
  register?: (email: string, password: string) => void;
  logout?: () => void;
};

const AuthContext = createContext<AuthContextType>({});

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const login = (email: string, password: string) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setUser({ email, password });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(undefined);
  };

  const register = (email: string, password: string) => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setUser({ email, password });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
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
