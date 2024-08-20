// app/benefits/page.tsx
import Card from '../../components/Card';

export default function Benefits() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="Why Build with DSCVR Canvas?"
        content={`
          With DSCVR Canvas, you can distribute your apps easily within a growing DSCVR decentralized social platform. 
          It also allows direct web3 wallet interaction within your Canvas App/dApp.

          DSCVR boasts of having over 500k unique users monthly, making it an ideal place for innovative Web3 projects.
        `}
        nextLink="/examples"
        backLink="/what-is-canvas"
      />
    </main>
  );
}
