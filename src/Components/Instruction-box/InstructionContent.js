import React from 'react';

const InstructionContent = () => {

	return(
			//TODO FIX All props from textile that dident come up in patternlab
		<div className="Modal Modal--instruction-box">

			<div className="Modal__header">
				<div className="Modal__title" id="title">
				 	SomeNiceHelpTitle
				</div>
				<div className="Modal__header-actions">
					<button type="button" className="Icon-button Icon-button--edit Modal__edit-button Tooltip" data-tooltip="Edit" aria-label="Edit">
						<span className="Icon-button__icon fas fa-pencil" aria-hidden="true"></span>
					</button>

					<button type="button" className="Icon-button Icon-button--close Modal__close-button Tooltip" data-tooltip="Close" aria-label="Close" data-a11y-dialog-hide>
						<span className="Icon-button__icon fas fa-times" aria-hidden="true"></span>
					</button>
				</div>

			</div>

			<div className="Modal__body Modal__body">
				SomeNiceHelpText
			</div>
				
		</div>
	);		
}

export default InstructionContent;