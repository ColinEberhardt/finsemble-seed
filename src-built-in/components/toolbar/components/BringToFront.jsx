import React from "react";
import { FinsembleButton } from "@chartiq/finsemble-react-controls";


// Store
import ToolbarStore from "../stores/toolbarStore";


const BringToFront = (props) => {
	const BringToFront = () => {
		FSBL.Clients.LauncherClient.bringWindowsToFront({}, () => {
			ToolbarStore.bringToolbarToFront();
		});
	}
	let wrapperClasses = props.classes + " icon-only";

	return (
		<FinsembleButton className={wrapperClasses} buttonType={["Toolbar"]} title="Bring All To Front" onClick={BringToFront}>
			<span>
				<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
					<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g id="atoms/icons/to-front" transform="translate(-9.000000, -9.000000)">
							<g id="To-Front" transform="translate(9.000000, 9.000000)">
								<path d="M7,5.5 L7,5 L6,5 L6,1 L1,1 L1,6 L5,6 L5,7 L6,7 L1,7 C0.44771525,7 6.76353751e-17,6.55228475 0,6 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 L6,0 C6.55228475,-1.01453063e-16 7,0.44771525 7,1 L7,5.5 Z" id="Combined-Shape" fill="#8E939F"></path>
								<path d="M10.5,7 L11,7 L11,6 L15,6 L15,1 L10,1 L10,4 L9,4 L9,5 L9,1 C9,0.44771525 9.44771525,1.01453063e-16 10,0 L15,0 C15.5522847,-1.01453063e-16 16,0.44771525 16,1 L16,6 C16,6.55228475 15.5522847,7 15,7 L10.5,7 Z" id="Combined-Shape" fill="#8E939F"></path>
								<path d="M10,9 L15,9 C15.5522847,9 16,9.44771525 16,10 L16,15 C16,15.5522847 15.5522847,16 15,16 L10,16 C9.44771525,16 9,15.5522847 9,15 L9,11 L9,12 L10,12 L10,15 L15,15 L15,10 L11,10 L11,9 L10,9 Z" id="Combined-Shape" fill="#8E939F"></path>
								<path d="M6,9 L5,9 L5,10 L1,10 L1,15 L6,15 L6,11 L7,11 L7,10 L7,15 C7,15.5522847 6.55228475,16 6,16 L1,16 C0.44771525,16 6.76353751e-17,15.5522847 0,15 L0,10 C-6.76353751e-17,9.44771525 0.44771525,9 1,9 L6,9 Z" id="Combined-Shape" fill="#8E939F"></path>
								<path d="M5,4 L11,4 C11.5522847,4 12,4.44771525 12,5 L12,11 C12,11.5522847 11.5522847,12 11,12 L5,12 C4.44771525,12 4,11.5522847 4,11 L4,5 C4,4.44771525 4.44771525,4 5,4 Z M5,5 L5,11 L11,11 L11,5 L5,5 Z" id="Combined-Shape" fill="#FFFFFF"></path>
							</g>
						</g>
					</g>
				</svg>
			</span>
		</FinsembleButton>
	)
};

export default BringToFront;