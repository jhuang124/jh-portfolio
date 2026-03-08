import { Loader2 } from "lucide-react";

interface ToolCallBadgeProps {
  toolName: string;
  args: Record<string, unknown>;
  state: "partial-call" | "call" | "result";
  result?: unknown;
}

function getLabel(
  toolName: string,
  args: Record<string, unknown>,
  done: boolean
): string {
  if (toolName === "str_replace_editor") {
    const path = (args.path as string) ?? "file";
    const isCreate = args.command === "create";
    return done
      ? isCreate ? `Created ${path}` : `Updated ${path}`
      : isCreate ? `Creating ${path}…` : `Editing ${path}…`;
  }

  if (toolName === "file_manager") {
    const path = (args.path as string) ?? "file";
    const newPath = args.new_path as string | undefined;
    if (args.command === "rename") {
      return done ? `Renamed ${path} to ${newPath}` : `Renaming ${path}…`;
    }
    return done ? `Deleted ${path}` : `Deleting ${path}…`;
  }

  return toolName;
}

export function ToolCallBadge({ toolName, args, state, result }: ToolCallBadgeProps) {
  const isDone = state === "result";
  const label = getLabel(toolName, args, isDone);

  return (
    <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 bg-neutral-50 rounded-lg text-xs border border-neutral-200">
      {isDone ? (
        <>
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-neutral-700">{label}</span>
        </>
      ) : (
        <>
          <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
          <span className="text-neutral-700">{label}</span>
        </>
      )}
    </div>
  );
}
