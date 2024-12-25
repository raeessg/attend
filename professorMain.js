import { Clerk } from "https://cdn.clerk.dev/clerk.js";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);
await clerk.load();

if (clerk.user) {
  const firstName = clerk.user.firstName;
  window.location.href = "professor-home.html";
  document.getElementById("nav-profile-name").innerHTML = `
  ${firstName}
`;

} else {
  document.getElementById("app").innerHTML = `
    <div id="sign-in"></div>
  `;

  const signInDiv = document.getElementById("sign-in");

  clerk.mountSignIn(signInDiv);
}
