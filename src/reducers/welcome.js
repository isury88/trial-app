import * as AppActionTypes from '../actiontypes/welcome';

const initialState = [
	{
      title: "Welcome"
    },
];


//REDUCER
//passing states changes to a new object without mutating the original one
export default function App(state=initialState, action) {
	switch(action.type) {
		case AppActionTypes.CHANGE_TITLE:
		return [
			...state, //spread operator
			{
				title: action.title
			}
		];

		default:
			return state;
	}
}
