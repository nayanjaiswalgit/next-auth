"use client";
import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const role = useCurrentRole();

  const onServerActionClick = () => {
    admin().then((data) => {
      data.error && toast.error(data.error);
      data.success && toast.success(data.success);
    });
  };

  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed ");
      } else {
        toast.error("FORBIDDEN");
      }
    });
  };
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="Hello allowed" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p>Admin-only API Route</p>
          <Button onClick={onApiRouteClick}> Click to test</Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p>Admin-only Server Action</p>
          <Button onClick={onServerActionClick}> Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminPage;
