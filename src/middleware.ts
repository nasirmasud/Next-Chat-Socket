import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const publicRoutes = ["/", "/sign-in(.*)", "/sign-up(.*)", "/api(.*)"];
// const protectedRoutes = ["/dashboard(.*)", "/profile(.*)"];

// const isPublicRoute = createRouteMatcher(publicRoutes);
// const isProtectedRoute = createRouteMatcher(protectedRoutes);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();

//   // পাবলিক রাউট স্কিপ
//   if (isPublicRoute(req)) return;

//   // প্রটেক্টেড রাউট হ্যান্ডেলিং
//   if (isProtectedRoute(req)) {
//     if (!userId) {
//       return Response.redirect(new URL("/sign-in", req.url));
//     }
//     return;
//   }

//   // সাইন আউট রিডাইরেক্ট
//   if (req.nextUrl.pathname === "/sign-out") {
//     return Response.redirect(new URL("/", req.url));
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
