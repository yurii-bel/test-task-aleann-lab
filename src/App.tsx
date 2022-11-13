import JobDetails from "./components/pages/JobDetails";
import { Routes, Route, Navigate } from "react-router-dom";
import NoMatch from "./components/pages/NoMatch";
import JobPostsPage from "./components/pages/JobPostsPage";

function App() {
  return (
    <div className="font-baseText">
      <Routes>
        <Route path="/" element={<Navigate to={"/job-posts/"} />} />
        <Route path="/job-posts/" element={<JobPostsPage />}></Route>
        <Route path="/job-posts/:postId/" element={<JobDetails />} />
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
