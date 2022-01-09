/* eslint-disable no-param-reassign */

/* eslint-disable consistent-return */
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { signIn } from '@services/identity/identityService';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: 'CEII UCA',
            credentials: {
                email: {
                    label: 'email',
                    type: 'email',
                    placeholder: '00019618@uca.edu.sv',
                },
                password: {
                    label: 'password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                const payload = {
                    email: credentials.email,
                    password: credentials.password,
                };

                const user = await signIn(payload);

                if (user) return user;
                throw new Error(user.exception);
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    name: user.displayName,
                    email: user.email,
                    picture: user.imageUrl,
                    role: user.role,
                    accessToken: user.token,
                };
            }

            return token;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;

            return session;
        },
    },
});
