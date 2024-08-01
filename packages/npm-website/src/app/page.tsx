import { InternalImport, Library } from "@npm/library";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{Library()}</div>
      <div>{InternalImport()}</div>
      <div>Site</div>
    </main>
  );
}
