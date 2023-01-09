import { useState } from 'react';

import useEventListener from '../useEventListener/useEventListener';
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = (): void => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEventListener('resize', handleSize);

  // Set size at the first client-side load
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);

  return windowSize;
}

export default useWindowSize;
