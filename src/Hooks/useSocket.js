import { useMemo,useEffect } from 'react';
import io from "socket.io-client";

export const useSocket = (path) => {
  const socket = useMemo(() => io.connect(path, {transports: ["websocket"],}),[path]);  

  useEffect(() => {
    socket.on('connect', () => console.log("conectado"))
  },[])

 return { socket }
}