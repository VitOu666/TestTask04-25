'use client';

import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-red-50 p-4 text-center">
      <div className="flex flex-col items-center gap-3">
        <AlertTriangle className="h-10 w-10 text-red-500" />
        <h2 className="text-xl font-semibold text-red-700">Произошла ошибка!</h2>
        <p className="text-sm text-muted-foreground">
          Что-то пошло не так при загрузке данных. Попробуйте ещё раз.
        </p>
      </div>
      <Button variant="outline" onClick={() => reset()}>
        Повторить попытку
      </Button>
    </main>
  );
}
