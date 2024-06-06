import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    colors: {
        primary: {
            500: '#EFEFEF',
        },
        secondary: {
            500: '#353338',
        },
        background: {
            light: '#F9F5F6',
            dark: '#3D3B40',
        },
        text: {
            light: '#000',
            dark: '#fff',
        },
    },
    fonts: {
        heading: "Limelight, sans-serif",
        body: "Poppins, sans-serif",
    }
    //   components: {
    //     Button: {
    //       variants: {
    //         solid: {
    //           bg: 'primary.500',
    //           color: 'white',
    //           _hover: {
    //             bg: 'primary.600',
    //           },
    //         },
    //       },
    //     },
    //   },
});

export default theme;