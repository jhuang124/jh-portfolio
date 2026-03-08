import { test, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { ToolCallBadge } from "../ToolCallBadge";

vi.mock("lucide-react", () => ({
  Loader2: ({ className }: { className?: string }) => (
    <div data-testid="loader" className={className} />
  ),
}));

afterEach(() => {
  cleanup();
});

test("str_replace_editor create — pending shows 'Creating /App.jsx…'", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "/App.jsx" }}
      state="call"
    />
  );
  expect(screen.getByText("Creating /App.jsx…")).toBeDefined();
});

test("str_replace_editor create — result shows 'Created /App.jsx'", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "/App.jsx" }}
      state="result"
      result="Success"
    />
  );
  expect(screen.getByText("Created /App.jsx")).toBeDefined();
});

test("str_replace_editor str_replace — pending shows 'Editing /Card.jsx…'", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "str_replace", path: "/Card.jsx" }}
      state="call"
    />
  );
  expect(screen.getByText("Editing /Card.jsx…")).toBeDefined();
});

test("str_replace_editor str_replace — result shows 'Updated /Card.jsx'", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "str_replace", path: "/Card.jsx" }}
      state="result"
      result="Success"
    />
  );
  expect(screen.getByText("Updated /Card.jsx")).toBeDefined();
});

test("file_manager rename — pending shows 'Renaming /old.jsx…'", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "rename", path: "/old.jsx", new_path: "/new.jsx" }}
      state="call"
    />
  );
  expect(screen.getByText("Renaming /old.jsx…")).toBeDefined();
});

test("file_manager rename — result shows 'Renamed /old.jsx to /new.jsx'", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "rename", path: "/old.jsx", new_path: "/new.jsx" }}
      state="result"
      result="Success"
    />
  );
  expect(screen.getByText("Renamed /old.jsx to /new.jsx")).toBeDefined();
});

test("file_manager delete — pending shows 'Deleting /utils.ts…'", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "delete", path: "/utils.ts" }}
      state="call"
    />
  );
  expect(screen.getByText("Deleting /utils.ts…")).toBeDefined();
});

test("file_manager delete — result shows 'Deleted /utils.ts'", () => {
  render(
    <ToolCallBadge
      toolName="file_manager"
      args={{ command: "delete", path: "/utils.ts" }}
      state="result"
      result="Success"
    />
  );
  expect(screen.getByText("Deleted /utils.ts")).toBeDefined();
});

test("unknown tool — pending shows raw tool name", () => {
  render(
    <ToolCallBadge toolName="unknown_tool" args={{}} state="call" />
  );
  expect(screen.getByText("unknown_tool")).toBeDefined();
});

test("unknown tool — result shows raw tool name", () => {
  render(
    <ToolCallBadge toolName="unknown_tool" args={{}} state="result" result="done" />
  );
  expect(screen.getByText("unknown_tool")).toBeDefined();
});

test("pending state renders spinner with animate-spin class", () => {
  render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "/App.jsx" }}
      state="partial-call"
    />
  );
  const loader = screen.getByTestId("loader");
  expect(loader.className).toContain("animate-spin");
});

test("result state renders green dot", () => {
  const { container } = render(
    <ToolCallBadge
      toolName="str_replace_editor"
      args={{ command: "create", path: "/App.jsx" }}
      state="result"
      result="Success"
    />
  );
  const dot = container.querySelector(".bg-emerald-500");
  expect(dot).toBeDefined();
});
