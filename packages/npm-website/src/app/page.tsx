import { InternalImport, Library } from '@npm/library';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NPM Website',
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{Library()}</div>
      <div>{InternalImport()}</div>
      <div>Site</div>
      <div>Make it Github Actions 2</div>
    </main>
  );
}
