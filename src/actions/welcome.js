import * as AppActionTypes from '../actiontypes/welcome';

export const changeTitle = title => {
	return {
		type: AppActionTypes.CHANGE_TITLE,
		title
	};
};

