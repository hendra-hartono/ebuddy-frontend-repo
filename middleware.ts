export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/users/new", "/users/edit/:id+"],
};
