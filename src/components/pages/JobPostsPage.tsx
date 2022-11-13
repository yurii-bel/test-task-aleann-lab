import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobPosts from "../JobPosts";
import Pagination from "../Pagination";

const access_token = process.env.REACT_APP_ACCESS_TOKEN;
const jobPostsPerPage = 5;

const JobPostsPage = () => {
  const [searchParams] = useSearchParams();

  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalJobPages, setTotalJobPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastJobPost = currentPage * jobPostsPerPage;
  const indexOfFirstJobPost = indexOfLastJobPost - jobPostsPerPage;
  const currentJobPosts = jobPosts.slice(
    indexOfFirstJobPost,
    indexOfLastJobPost
  );
  console.log("RERENDERED AND ALL CALCULATED");
  useEffect(() => {
    const curPage = searchParams.get("page");
    if (typeof curPage === "string") setCurrentPage(parseInt(curPage));
  }, [searchParams]);

  useEffect(() => {
    const fetchJobPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=${access_token}`
      );
      setJobPosts(res.data);
      setTotalJobPages(Math.ceil(res.data.length / jobPostsPerPage));
      setLoading(false);
    };

    fetchJobPosts();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center bg-jobPostsPageBg flex-wrap flex-col pt-[29px]">
        <JobPosts
          currentPage={currentPage}
          jobPosts={currentJobPosts}
          loading={loading}
        />
        <Pagination
          jobPostsPerPage={jobPostsPerPage}
          totalJobPosts={jobPosts.length}
          currentPage={currentPage}
          totalJobPages={totalJobPages}
        />
      </div>
    </>
  );
};

export default JobPostsPage;
