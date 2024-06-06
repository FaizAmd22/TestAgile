import {
    Flex,
    keyframes,
    Image,
    useColorMode,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import loading from "../../../assets/loading01.gif"

const slideIn = keyframes`
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  `;

const LoadingScreen = () => {
    const [isShowBox1, setIsShowBox1] = useState(false)
    const [isShowIcon, setIsShowIcon] = useState(false)
    const { colorMode } = useColorMode();
    
    useEffect(() => {
        setIsShowIcon(true)
        setIsShowIcon(false)
        setIsShowBox1(true)
        setTimeout(() => {
            setIsShowBox1(false)
        }, 1500);
    }, [])

    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            height="100vh"
            position="relative"
            bg="#FAF1CA"
        >
            {!isShowBox1 && (
                <Flex
                    bg={colorMode === 'light' ? 'background.light' : 'background.dark'}
                    width="100%"
                    height="100vh"
                    animation={`${slideIn} 0.6s ease-in-out`}
                    rounded="0px 50px 50px 0px"
                    position="absolute"
                    top={0}
                    left={0}
                />
            )}
            {!isShowIcon && (
                <Image src={loading} h={{md:"80%", base:"50%"}} />
            )}
        </Flex>
    );
};

export default LoadingScreen;