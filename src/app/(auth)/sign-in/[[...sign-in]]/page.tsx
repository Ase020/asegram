import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-[calc(100vh-64px)] w-full flex-center">
      <SignIn />
    </div>
  );
}
