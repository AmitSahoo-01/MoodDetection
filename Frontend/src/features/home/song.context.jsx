import { createContext } from "react";

export const SongContext = createContext();

export const SongContextProvider = ({ children }) => {
    
    const [song, setSong] = useState({
        "url": "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        "posterUrl": "https://i.ytimg.com/vi/3JZ_D3ELwOQ/maxresdefault.jpg",
        "title": "Eminem - Without Me (Official Music Video)",
        "mode": "normal"
    });

    const [loading, setloading] = useState(false);

    
    return (
        <SongContext.Provider value={{ song, setSong, loading, setloading }}>
            {children}
        </SongContext.Provider>
    );
};
