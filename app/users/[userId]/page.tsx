import { notFound } from "next/navigation";

export default async function UserPage({ params }: { params: Promise<{ userId: string }> }) {
    const { userId } = await params;
    const user = await fetchUser(userId);
    if (!user) {
        notFound();
    }
    console.log(userId);
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

async function fetchUser(userId: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
        return undefined;
    }
    const user = await response.json();

    return user;
}

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }