import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  ChevronDown,
  StarIcon,
  FileText,
  PenBox,
  GraduationCap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { checkUser } from "@/lib/checkUser";

const Header=async()=> {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-4 h-16 flex items-center justify-between">
        {/* Left Side - Logo & User Icon (Stacked Vertically) */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src="/logo (1).png"
              alt="Sensai logo"
              width={200}
              height={60}
              className="h-12 py-1 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Right Side - Buttons & Dropdown */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block"> Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>
                  <StarIcon className="h-4 w-4" />
                  <span className="hidden md:block"> Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href={"/resume"} className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span> Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href={"/ai-cover-letter"}
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    <span> Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/interview"} className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">SignIn</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton className="mt-2" 
            appearance={{
              elements:{
                avatarBox:"w-10 h-10",
                userButtonPopoverCard:"shadow-x1",
                userPreviewMainIdentifier:"font-semibold",
              },
            }}
            afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

export default Header;

