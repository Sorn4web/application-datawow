/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "local",
      name: "Credentials",
      credentials: {
        username: { label: "username", type: "text" },
      },
      async authorize(credentials: any) {
        try {
          const baseurl = process.env.NEXT_PUBLIC_API_URL + "/v1/auth";
          const url = baseurl + "/login";

          const data = JSON.stringify(credentials);

          const config = {
            method: "post",
            maxBodyLength: Infinity,
            url: url,
            headers: {
              "Content-Type": "application/json",
            },
            data: data,
          };

          const res = await axios.request(config);

          if (res.status === 200 || res.status === 201) {
            return res.data;
          }
        } catch (error: any) {
          throw new Error(
            error.response?.data ? error.response.data.message : error.message
          );
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (account) {
        token.user = user;
      }
      return token;
    },
    session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
