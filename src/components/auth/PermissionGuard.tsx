"use client";

import { useEffect, useState } from "react";
import { authService } from "@/services/auth.service";

interface PermissionGuardProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

export default function PermissionGuard({ children, allowedRoles }: PermissionGuardProps) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // 1. Get role from the JWT in localStorage
    const role = authService.getUserRole();
    setUserRole(role);
    // 2. Prevent hydration mismatch (Next.js specific)
    setIsMounted(true);
  }, []);

  // While checking, show nothing (or a small skeleton)
  if (!isMounted) return null;

  // 3. If user's role is in the allowed list, show the content
  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  // Otherwise, hide everything
  return null;
}