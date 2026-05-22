import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { getToken } from "next-auth/jwt";
import { prisma } from "./prisma";
import type { NextRequest } from "next/server";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;
        const user = await prisma.admin.findUnique({ where: { email: credentials.email } });
        if (!user) return null;
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) return null;
        return { id: user.id, email: user.email };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.sub) {
        session.user = session.user || {};
        (session.user as any).id = token.sub;
        session.user.email = token.email as string | undefined;
      }
      return session;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin/login"
  }
};

export async function verifyAuth(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return null;
  }
  return token;
}
