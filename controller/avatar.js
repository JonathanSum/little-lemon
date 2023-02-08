import { createContext, useContext, useState } from "react";
const ThemeContext = createContext(undefined);

export const avatarProvider = ({ children }) => {
  const [image, setImage] = useState(null);
  return (
    <ThemeContext.Provider value={{ image, clearImage: () => setImage(null) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAvatar = () => useContext(avatarProvider);
