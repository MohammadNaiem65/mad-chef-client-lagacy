import { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	// ! Required variables
	const auth = getAuth(app);

	const name = 'mohammad';

	// * Module scaffolding
	const authInfo = { name };

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default AuthProvider;