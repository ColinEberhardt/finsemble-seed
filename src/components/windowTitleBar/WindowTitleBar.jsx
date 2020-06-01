/*!
 * Copyright 2017 - 2020 by ChartIQ, Inc.
 * All rights reserved.
 */
import React from "react";
import { useWindowTitleBar } from "@chartiq/finsemble-ui/react/hooks";
import { AlwaysOnTopButton, DockingButton, LinkerButton, ShareButton, mountWindowTitleBar, TabRegion, CloseButton, MaximizeButton, MinimizeButton } from "@chartiq/finsemble-ui/react/components";
import "@chartiq/finsemble-ui/react/assets/css/finsemble.css";
import "../../../assets/css/theme.css";

/**
 * This is the Window Title Bar component, which is rendered at
 * the top of every Finsemble-controlled HTML window.
 * You can customize this template by adding or removing
 * elements and sytling as you see fit.
 *
 * The visibility of each of the controls is controlled by
 * config. For example, setting the
 * "foreign.components.Window Manager.showLinker" property
 * to false will hide the <LinkerButton/>.
 */
const WindowTitleBar = () => {
	const {
		showLinkerButton,
		showShareButton,
		showDockingButton,
		showAlwaysOnTopButton,
		showMinimizeButton,
		showMaximizeButton,
		showCloseButton,
	} = useWindowTitleBar();

	return (
		<>
			<div className="fsbl-header-left">
				{showLinkerButton && <LinkerButton />}
				{showShareButton && <ShareButton />}
			</div>
			<div className="fsbl-header-center">
				{/* If tabbing is disabled, <TabRegion/> will
					only display the title */}
				<TabRegion />
			</div>
			<div className="fsbl-header-right">
				{showDockingButton && <DockingButton />}
				{showAlwaysOnTopButton && <AlwaysOnTopButton />}
				{showMinimizeButton && <MinimizeButton />}
				{showMaximizeButton && <MaximizeButton />}
				{showCloseButton && <CloseButton />}
			</div>
		</>
	);
};

// Because the WindowTitleBar is mounted to dynamically created
// DOM elements, you must pass in the WindowTitleBar to this function.
// Doing will so will (asynchronously) register the WindowTitleBar
// with Finsemble, create the DOM, and mount it.
mountWindowTitleBar(WindowTitleBar);
