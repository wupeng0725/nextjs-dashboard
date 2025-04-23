import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // 排除 `api` 路径、Next.js 静态资源和 `.png` 文件、/home
  // 其中matcher类似于路由白名单，在这个规则内的没有登录也可以访问。
  // 使用中间件的优点是在完成身份验证之前，需要登录才能访问的路由 不会开始渲染 ，增强应用程序的安全性和性能。
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};