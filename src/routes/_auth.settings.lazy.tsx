import { createLazyFileRoute } from "@tanstack/react-router";
import Settings from "../screens/Settings";

export const Route = createLazyFileRoute("/_auth/settings")({
  component: About,
});

function About() {
  return <Settings />;
}
