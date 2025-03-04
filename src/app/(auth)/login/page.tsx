import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <h1 className="scroll-m-20 text-4xl font-nanum-extrabold tracking-tight lg:text-5xl text-center py-8">
          Easy Cover
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
