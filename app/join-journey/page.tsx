// app/join-journey/page.tsx
import Card from '../../components/Card';

export default function JoinJourney() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <Card
        title="Ready to Start Building DSCVR Canvas?"
        content={`
          I am considering creating a DSCVR Canvas development series on dProgrammingUniversity (dPU) after I discovered no DSCVR Canvas development guides on Google/Youtube except for the official docs. 
          It will be 100% FREE with step-by-step Nextjs apps DSCVR Canvas guides (Articles and Videos). 
          
          Each episode, we will build & deploy together a Nextjs powered DSCVR Canvas (From basic to advance with acces to the code repos)
          
          So, If you would like to help make this a reality, here is what you can do (Kindly Comment below):
          1. Suggest a name for the episode series.
          2. What would you like to see/build together in the series.
          3. Tag at least 3 friends to spread the word.
          4. Optionally, tag the DSCVR team and share why you think this initiative is worth supporting with a grant.
        
          DISCLOSURE: You have been interacting with my Nextjs App via DSCVR Canvas without need to visit the site - Awesome (share me your experience with this Canvas as part of your comment)!
          
          Looking forward to kick start this journey with you.
          Thanks!
        `}
        restartLink="/"
        backLink="/how-to-build"
      />
    </main>
  );
}
