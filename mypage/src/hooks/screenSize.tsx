import {
  useLayoutEffect,
  useState,
} from 'react';

function useScreenSize() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [screenType, setScreenType] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
    if(window.innerWidth >= 1200){
			setScreenType('Pc')
		}else if(window.innerWidth < 1200 && window.innerWidth >= 700){
			setScreenType('Tablet')
		}else if(window.innerWidth < 700){
			setScreenType('Mobile')
		}
  };

  useLayoutEffect(() => {
    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    screenWidth,
    screenHeight,
    screenType,
    isLoaded,
  };
}

export default useScreenSize;