import { useState, createContext, useContext, useMemo } from "react";
import ReactDOM from "react-dom/client";

import React from "react";

export interface ContextUser {
  username: string;
}

export type UserContextState = {
  contextUsername: string;
  updateContextUsername: (contextUsername: string) => void;
};

export const UserContext = createContext<UserContextState | undefined>(
  undefined
);
