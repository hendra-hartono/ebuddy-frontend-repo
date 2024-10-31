import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import axios from "axios";

const authOptions: NextAuthOptions = {
  adapter: FirestoreAdapter(),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials.password) return null;
        try {
          const url = process.env.API_URL + "/login";
          const response = await axios.post(url, {
            email: credentials.email,
            password: credentials.password,
          });
          return { email: credentials.email };
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

export default authOptions;
