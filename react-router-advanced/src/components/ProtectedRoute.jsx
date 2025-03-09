import { useState } from 'react';

const ProtectedRoute = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
		<button onClick='Submit'>Button</button>
		</div>
		<PrivateRoute path="/ProtectedRout" component={ProtectedRout} />
	);
};

export default ProtectedRoute;
