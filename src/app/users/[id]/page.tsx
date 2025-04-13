import BackButton from "src/components/ui/backbtn";
import { Card, CardHeader, CardTitle, CardContent, CardFooter} from "src/components/ui/card";

export default async function UserPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </CardContent>
        <CardFooter>
          <BackButton />
        </CardFooter>
      </Card>
    </main>
  );
}
