
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export default function Loading() {
  return (
    <main className="flex flex-col gap-6 min-h-screen items-center justify-center bg-blue-100 p-4">
      <Progress  />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-6 rounded-xl bg-white shadow-md space-y-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-10 w-1/2 mt-4" />
          </div>
        ))}
      </div>
    </main>
  );
}
