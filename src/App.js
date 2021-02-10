import React, { Suspense } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import TripsContainer from "./Trips/TripsContainer";
const Background = React.lazy(() => import("./shared/Background"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Background />
      <Header className="container" />
      <main className="container mx-auto">
        <MainContent />
      </main>
      <TripsContainer />
    </Suspense>
  );
}

export default App;
