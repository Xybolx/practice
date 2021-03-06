import { useRef, useEffect } from "react";
import useSetState from "./useSetState";

const useSpeech = (text, isSpeaking, opts = {}) => {
    
    const [state, setState] = useSetState({
        isPlaying: false,
        volume: opts.volume || 1,
    });

    const uterranceRef = useRef(null);

    useEffect(() => {
        if (isSpeaking) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.pitch = 0.1;
            utterance.onstart = () => setState({ isPlaying: true });
            utterance.onresume = () => setState({ isPlaying: true });
            utterance.onend = () => setState({ isPlaying: false });
            utterance.onpause = () => setState({ isPlaying: false });
            uterranceRef.current = utterance;
            window.speechSynthesis.speak(uterranceRef.current);
        }
        // eslint-disable-next-line
    }, [text, isSpeaking]);

    return state;
};

export default useSpeech;