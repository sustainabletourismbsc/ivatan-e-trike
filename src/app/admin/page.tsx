import { LogoutButton } from "@/components/auth/logout";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Page(props: PageProps<"/">) {
  const client = await createClient();
  const { data, error } = await client.auth.getClaims();

  if (error) {
    console.log(error.message);
    throw error;
  }

  const user = data?.claims as any;
  if (!user) redirect("/auth/login");
  if (!(user.user_role !== "default")) redirect("/auth/login"); //we are using default for now but TODO add a user type for user_admin

  return (
    <div className="h-svh w-svw grid place-items-center">
      <div className="flex items-center justify-center flex-col">
        <div className="text-2xl font-black">Hello Admin</div>
        <LogoutButton />
      </div>
    </div>
  );
}
