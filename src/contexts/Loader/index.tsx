import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect, useMemo, useReducer } from "react";

interface ILoaderContext {
  visibility: boolean;
  show: (key: string) => void;
  hide: (key: string) => void;
}

export interface LoaderProviderProps {
  children: React.ReactNode;
}

interface IAction {
  type: string;
  key: string;
}

const LoaderContext = React.createContext<ILoaderContext>({} as ILoaderContext);

export const LoaderProvider: React.FC<LoaderProviderProps> = ({ children }) => {
  const initialState: string[] = [];

  const reducer = (state: string[], action: IAction) => {
    switch (action.type) {
      case "show":
        return Array.from(new Set([...state, action.key]));
      case "hide":
        return state.filter((e) => e !== action.key);
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(`Loader ${JSON.stringify(state, null, 2)}`);
  }, [state]);

  const visibility = useMemo(() => state.length > 0, [state]);

  const show = (key: string): void => {
    dispatch({ type: "show", key });
  };

  const hide = (key: string): void => {
    dispatch({ type: "hide", key });
  };

  return (
    <LoaderContext.Provider value={{ visibility, show, hide }}>
      {children}
      {visibility && (
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "#00000033",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}
    </LoaderContext.Provider>
  );
};
export default LoaderContext;

export const useLoader = (): ILoaderContext => {
  return useContext(LoaderContext);
};
