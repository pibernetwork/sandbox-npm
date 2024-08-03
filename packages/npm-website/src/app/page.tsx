import { InternalImport, Library } from '@npm/library';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NPM Website',
};

export default function Home() {
  console.log('Hello World!');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{Library()}</div>
      <div>{InternalImport()}</div>
      <div>Site</div>
    </main>
  );
}
