import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LocalUser {
  email: string;
  user_metadata: { full_name: string };
}

interface StoredAccount {
  email: string;
  password: string;
  fullName: string;
}

interface AuthContextValue {
  user: LocalUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

const ACCOUNTS_KEY = 'jorique_accounts';
const SESSION_KEY = 'jorique_session';

function getAccounts(): StoredAccount[] {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) ?? '[]');
  } catch {
    return [];
  }
}

function saveAccounts(accounts: StoredAccount[]) {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
}

function getSession(): LocalUser | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveSession(user: LocalUser | null) {
  if (user) {
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<LocalUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getSession());
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    const accounts = getAccounts();
    const found = accounts.find(
      (a) => a.email.toLowerCase() === email.toLowerCase() && a.password === password
    );
    if (!found) {
      return { error: 'Invalid email or password. Please try again.' };
    }
    const localUser: LocalUser = {
      email: found.email,
      user_metadata: { full_name: found.fullName },
    };
    saveSession(localUser);
    setUser(localUser);
    return { error: null };
  };

  const signUp = async (
    email: string,
    password: string,
    fullName: string
  ): Promise<{ error: string | null }> => {
    const accounts = getAccounts();
    const exists = accounts.some((a) => a.email.toLowerCase() === email.toLowerCase());
    if (exists) {
      return { error: 'An account with this email already exists. Please sign in.' };
    }
    const newAccount: StoredAccount = { email, password, fullName };
    saveAccounts([...accounts, newAccount]);
    return { error: null };
  };

  const signOut = async () => {
    saveSession(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
