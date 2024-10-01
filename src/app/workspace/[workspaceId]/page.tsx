"use client";

import { useWorkspaceId } from "@/hooks/use-workspace.id";
import { useParams } from "next/navigation";

const WorkspaceIdPage = () => {
  const workspaceId = useWorkspaceId();
  return <div>ID: {workspaceId}</div>;
};

export default WorkspaceIdPage;
