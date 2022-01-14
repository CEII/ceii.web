import 'next-auth';

declare module 'next-auth' {
    export interface User {
        email: string;
        oAuthId: string;
        givenName: string;
        familyName: string;
        imageUrl: string;
    }

    export interface Session {
        user: User;
    }

    export interface CallbackOptions {
        jwt: (params: { token: JWT; user?: User; account?: A; profile?: P; isNewUser?: boolean }) => Awaitable<JWT> & {
            profile: Profile;
        };
    }
}
