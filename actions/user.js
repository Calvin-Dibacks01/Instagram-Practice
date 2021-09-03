import firebase from 'firebase';

export const updateEmail = (email) => {
	return {type: 'UPDATE_EMAIL', payload: email}
}

export const updatePassword = (password) => {
	return {type: 'UPDATE_PASSWORD', payload: password}
}

export const updateUsername = (username) => {
	return {type: 'UPDATE_USERNAME', payload: username}
}

export const updateBio = (bio) => {
	return {type: 'UPDATE_BIO', payload: bio}
}

/*export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			console.log(email, password)
			const response = await firebase.auth().signInWithEmailAndPassword(email, password)
			console.log(response)
		} catch (e) {
			alert(e)
		}
	}
}*/

export const login = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password } = getState().user
			const response = await firebase.auth().signInWithEmailAndPassword(email, password)
			dispatch({type: 'LOGIN', payload: response.user})
		} catch (e) {
			alert(e)
		}
	}
}


export const signup = () => {
	return async (dispatch, getState) => {
		try {
			const { email, password, username, bio } = getState().user
			const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
			if(response.user.uid) {
				const user = {
					uid: response.user.uid,
					email: email,
					username: username,
					bio: bio,
					photo: '',
					token: null,
				}
				db.collection('users').doc(response.user.uid).set(user)
				dispatch({type: 'SIGNUP', payload: user})
			}
		} catch (e) {
			alert(e)
		}
	}
}