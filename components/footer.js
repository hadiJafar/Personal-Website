import { Box } from "@chakra-ui/react";


const Footer = () => {
	return (
		
		<Box align="center" opacity={0.75} fontSize="sm">
			&copy; {new Date().getFullYear()} Hadi Jafar.
		</Box>
	);
};
export default Footer;