import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Export the middleware wrapped with the withAuth helper
export default withAuth(
  // Augment the request with the session
  function middleware(req) {
    // If the user is authenticated, allow them to access the page
    return NextResponse.next();
  },
  {
    callbacks: {
      // The authorized callback determines if the request is authorized
      authorized({ req, token }) {
        // Only allow authenticated users to access admin routes
        return !!token;
      },
    },
    // The pages that need authentication
    pages: {
      signIn: "/admin/login",
    },
  }
);

// Define which routes this middleware should run on
export const config = {
  matcher: ["/admin/create", "/admin/delete", "/admin/update"],
};