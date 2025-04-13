import { Button } from "@/components/ui/button";
import {   Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle, } from "@/components/ui/card";
import './globals.css'
import { User } from "../../.next/types/user";
  import Link from "next/link";
  
  async function getUsers(): Promise<User[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
  
    if (!res.ok) throw new Error("Failed to fetch users");
  
    return res.json();
  }
  
  export default async function Home() {
    const users = await getUsers();
  
    return (
      <main className="min-h-screen p-8 bg-blue-100 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <Card key={user.id} className="bg-white shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Company:</strong> {user.company.name}</p>
            </CardContent>
            <CardFooter>
            <Link href={`/users/${user.id}`}>
              <Button>Подробнее</Button>
            </Link>
            </CardFooter>
          </Card>
        ))}
      </main>
    );
  }