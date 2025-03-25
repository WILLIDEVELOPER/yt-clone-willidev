import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { UserCircleIcon, Settings, LogOut } from "lucide-react";
import { LogoutButton } from "@/modules/auth/ui/components/logout-button";
import Link from "next/link";
import { auth } from "@/auth";

export const AuthButton = async() => {
  const session = await auth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="px-4 py-2 text-sm font-medium text-blue-600
          hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
        >
          {session ? (
            <>
              <UserCircleIcon className="size-4 mr-2" />
              {session.user?.name || "Profile"}
            </>
          ) : (
            <>
              <UserCircleIcon className="size-4 mr-2" />
              Sign in
            </>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        {session ? (
          <>
            <DropdownMenuItem asChild>
              <Link href="/profile">
                <Settings className="h-4 w-4 mr-2" />
                Edit Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <LogoutButton>
              <DropdownMenuItem>
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </DropdownMenuItem>
            </LogoutButton>
          </>
        ) : (
          <DropdownMenuItem asChild>
            <Link href="/auth/login">
              <UserCircleIcon className="h-4 w-4 mr-2" />
              Sign in
            </Link>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
