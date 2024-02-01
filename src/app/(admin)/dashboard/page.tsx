"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function dashboard() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  console.log(session);
  console.log(status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("./Login");
    } else {
      if (session?.role !== undefined && session?.user.role !== "admin") {
        router.push("./Login");
      }else{
        router.push("./dashboard");
      }
    }
  }, [router, session, session?.user.role, status]);
  return (
    <div className="w-full h-96 bg-gray-300 rounded-[12px] flex justify-center items-center">
      <h1>Dashboard</h1>
    </div>
  );
}
