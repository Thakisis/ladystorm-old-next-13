import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
   colors: {
    transparent: 'transparent',
    black: '#000',
   },   
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'black',
        color: 'white',
      },
    }
    },
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;
