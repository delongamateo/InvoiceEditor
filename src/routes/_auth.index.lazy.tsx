import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../Test";
import { App } from "../App";
import Dashboard from "../screens/Dashboard";

export const Route = createLazyFileRoute("/_auth/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
