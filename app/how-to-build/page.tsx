// app/how-to-build/page.tsx
import Card from '../../components/Card';

export default function HowToBuild() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="Building Your First DSCVR Canvas"
        content={`
          There are two ways to build a Canvas: 
          1. Convert an existing app/dApp into a Canvas. 
          2. Build from scratch. 
          Both methods are straightforward and require just a few modifications.
        `}
        nextLink="/join-journey"
        backLink="/examples"        
      />
    </main>
  );
}
