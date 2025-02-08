import React, { useState, useEffect } from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../../aws-exports';
import { useNavigate } from 'react-router-dom';


Amplify.configure({
    Auth: {
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
    }
});

const SignIn = () => {
    const [jwtToken, setJwtToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchJwtToken();
    }, []);

    const fetchJwtToken = async () => {
        try {
            const session = await Auth.currentSession();
            const token = session.getIdToken().getJwtToken();
            setJwtToken(token);
        } catch (error) {
            console.log('Error fetching JWT token:', error);
        }
    };

    return (
        <Authenticator
            initialState="signIn"
            signUpAttributes={['given_name', 'family_name']}
            formFields={{
                signUp: {
                    given_name: {
                        placeholder: 'Enter your first name',
                        label: 'First Name',
                        type: 'text',
                        required: true,
                    },
                    family_name: {
                        placeholder: 'Enter your last name',
                        label: 'Last Name',
                        type: 'text',
                        required: true,
                    },
                },
            }}
        >
            {({ user }) => (
                <div>
                    <div>Welcome {user.attributes.given_name}</div>
                    <h4>Your JWT token:</h4>
                    {jwtToken}
                </div>
            )}
        </Authenticator>
    );
};

export default SignIn;
