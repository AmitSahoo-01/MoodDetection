import { getSong } from "../services/song.api";
import { useContext } from "react";
import { SongContext } from "../song.context.jsx";


export const useSong = ({children}) => {
    const { song, setSong, loading, setloading } = useContext(SongContext);

    async function getSong(mood) {
        setloading(true);
        try {
            const songData = await getSong({ mood });
            setSong(songData);
        } catch (error) {
            console.error("Error fetching song:", error);
        } finally {
            setloading(false);
        }
    }

    return { song, loading, getSong  }; 
}

export default useSong;