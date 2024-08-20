// app/what-is-canvas/page.tsx
import Card from '../../components/Card';

export default function WhatIsCanvas() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="What is DSCVR Canvas?"
        content={`
          DSCVR Canvas is a framework that allows developers to embed custom applications directly into DSCVR’s social feeds. 
          
          It opens up opportunities to reach a wide audience and build innovative Web3 experiences.
        `}
        nextLink="/benefits"
        backLink="/"
      />
    </main>
  );
}
