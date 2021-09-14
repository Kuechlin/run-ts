import { Console, Decode, Hook } from 'console-feed';
import React, { useEffect, useState } from 'react';
import ScrollArea from './ScrollArea';

export default function () {
  const [logs, setLogs] = useState<any[]>([]);

  const clear = () => setLogs([]);

  useEffect(() => {
    Hook(window.console, (log) => setLogs((logs) => [...logs, Decode(log)]));

    window.addEventListener('clear-logs', clear);
    return () => {
      window.removeEventListener('clear-logs', clear);
    };
  }, []);

  return (
    <ScrollArea horizontal={false}>
      <Console logs={logs} variant="dark" />
    </ScrollArea>
  );
}
