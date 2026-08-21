"use client";

import { useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "../ui/toast";

export function SocialLogin({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = async (e: MouseEvent) => {
    e.stopPropagation();
    const supabase = createClient();
    setIsLoading(true);

    try {
      //   const next = new URLSearchParams(window.location.search).get("next");
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/oauth?next=${encodeURIComponent("/admin")}`,
        },
      });

      if (error) throw error;
    } catch (error: unknown) {
      toast.add({
        title: "Error",
      });
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={isLoading}
      onClick={(e) => handleSocialLogin(e as any)}
    >
      {isLoading ? "Logging in..." : "Continue with Google"}
    </Button>
  );
}
