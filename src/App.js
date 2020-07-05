import React from "react";

//Components
import FeedPreview from "./components/feed-preview/feed-preview.component";

//Pages
import HomePage from "./pages/home-page/home-page.page";

//Styles
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <HomePage>
        <FeedPreview url="https://www.gamespot.com/feeds/mashup/" />
      </HomePage>
    </div>
  );
}

export default App;
