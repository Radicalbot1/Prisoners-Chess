import { useColorScheme, Button } from "@mui/material";
import { SxProps } from '@mui/system';
import React from "react";
import { DarkMode, LightMode } from "@mui/icons-material";

interface ModeToggleProps {
	sx?: SxProps | undefined;
}

function ModeToggle(props: ModeToggleProps) {
	const { mode, setMode } = useColorScheme();
	const [mounted, setMounted] = React.useState(false);

	// necessary for server-side rendering
	// because mode is undefined on the server
	React.useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}

	return (
		<Button
			variant="text"
			onClick={() => {
				setMode(mode === "light" ? "dark" : "light");
			}}
			sx={{ ...props.sx }}
		>
			{mode === "light" ? <DarkMode /> : <LightMode />}
		</Button>
	);
}

export default ModeToggle;