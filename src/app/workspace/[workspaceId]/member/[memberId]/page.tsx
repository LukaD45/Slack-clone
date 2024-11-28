"use client";

import { useWorkspaceId } from "@/hooks/use-workspace-id";

const MemberIdPage = () => {
  const workspaceId = useWorkspaceId();

  return <div>Memebr Id Page</div>;
};

export default MemberIdPage;
