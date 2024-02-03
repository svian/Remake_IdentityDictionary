import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type UserContextState = {
  contextUsername: string;
  updateContextUsername: (contextUsername: string) => void;
};

export const UserContext = createContext<UserContextState | undefined>(
  undefined
);

export interface UserContextProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserContextProps> = (
  props: UserContextProps
): JSX.Element => {
  const [contextUsername, setContextUsername] = useState("");
  const updateContextUsername = useCallback((username: string): void => {
    console.log("set " + username);
    localStorage.setItem("username", username);
    setContextUsername(username);
  }, []);

  useEffect(() => {
    const fetchUser = () => {
      updateContextUsername(localStorage.getItem("username") || "");
    };

    if (contextUsername === "") {
      fetchUser();
    }
  }, []);

  return (
    <UserContext.Provider value={{ contextUsername, updateContextUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): UserContextState =>
  useContext(UserContext) as UserContextState;
