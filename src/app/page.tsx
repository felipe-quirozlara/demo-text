import { getTitle } from "@/components/data/action-edit-json";

export default async function Home() {
  const title = await getTitle();

  return (
    <main>
      <p className="p-3">
        {title}
      </p>
    </main>
  );
}
