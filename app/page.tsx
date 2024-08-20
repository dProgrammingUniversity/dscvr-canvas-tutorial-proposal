// app/page.tsx
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="Discover the Power of DSCVR Canvas"
        content={`
          Hi, I am Solomon Foskaay, a technical content creator and developer Instructor at dprogrammingUniversity (dPU).

          I have discovered the incredible potential of DSCVR Canvas. Want to learn how you can build your own?
          Click 'YES' (Next) to start the journey or 'NO' (Do nothing) if you are just exploring my DSCVR timeline.
        `}
        nextLink="/what-is-canvas"
      />
    </main>
  );
}
