import JobPost from "./shared/JobPost";

type JobPostsProps = {
  jobPosts: any[];
  loading: boolean;
  id?: number;
  currentPage?: number;
};

const JobPosts = ({ jobPosts, loading, currentPage }: JobPostsProps) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  function randomNumber(min: number = 10, max: number = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <>
      {jobPosts.map((jobPost: JobPostsProps, index: any) => (
        <JobPost
          currentPage={currentPage}
          jobPost={jobPost}
          index={randomNumber()}
          key={jobPost.id}
        />
      ))}
    </>
  );
};

export default JobPosts;
