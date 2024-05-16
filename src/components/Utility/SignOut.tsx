"use client";

import { ROUTES } from "@/routes";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();
  router.push(ROUTES.LOGIN);
  return <></>;
}
