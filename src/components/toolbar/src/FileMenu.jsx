import React from "react";
import { Menu } from "@chartiq/finsemble-ui/react/components/Menu";
import {
	Preferences,
	SystemLog,
	CentralLogger,
	Documentation,
	Restart,
	Reset,
	Quit,
} from "@chartiq/finsemble-ui/react/components/System";

export const FileMenu = () => (
	<Menu
		id="fileMenu"
		title={
			<img
				className="finsemble-toolbar-brand-logo"
				src="../../../assets/img/Finsemble_Taskbar_Icon.png"
			/>
		}
	>
		<Preferences />
		<SystemLog />
		<CentralLogger />
		<Documentation />
		<Restart />
		<Reset />
		<Quit />
		{/* To add your own items to the menu, import MenuItem from
		 * "@chartiq/finsemble-ui/react/components" and add the following:
		 * <MenuItem onClick={...}>Your Item</MenuItem>
		 */}
	</Menu>
);