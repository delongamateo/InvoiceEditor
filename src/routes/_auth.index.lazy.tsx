import { createLazyFileRoute } from "@tanstack/react-router";
import Test from "../Test";
import { App } from "../App";

export const Route = createLazyFileRoute("/_auth/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <App />
    </div>
  );
}
