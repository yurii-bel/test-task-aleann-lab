import PagLeftArrow from "./elementsUI/PagLeftArrow";
import PagRightArrow from "./elementsUI/PagRightArrow";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  jobPostsPerPage: number;
  totalJobPosts: number;
  currentPage: number;
  totalJobPages: number;
};

const Pagination = ({
  jobPostsPerPage,
  totalJobPosts,
  currentPage,
  totalJobPages,
}: PaginationProps) => {
  // const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const pageNumbers: any[] = [];
  // Temporary solution for pagination pages "focus effect"

  // const page: any = document.getElementById(`a${currentPage}`);
  for (let i = 1; i <= Math.ceil(totalJobPosts / jobPostsPerPage); i++)
    pageNumbers.push(i);

  const [searchParams, setSearchParams] = useSearchParams();
  const handlePaginationChange = (p: number) => {
    searchParams.set("page", `${p}`);
    setSearchParams(searchParams);
  };

  const paginatorNumStyles = (num: number) => {
    let curPage = searchParams.get("page");
    if (curPage === null) curPage = "1";
    if (num.toString() !== curPage) return "page paginatePages";
    return "page paginatePages paginatePagesFocus";
  };

  return (
    <div className="w-full md:w-auto">
      <nav className="flex justify-center items-center flex-stretch w-auto mx-2 mt-[49px] md:px-0 mb-16  bg-white paginationShadow rounded-[10.4px] md:w-auto">
        <button
          onClick={() => {
            const nextPageParam = searchParams.get("page");
            let nextPage: number;
            if (typeof nextPageParam === "string") {
              nextPage = parseInt(nextPageParam) - 1;
              if (nextPage !== 0) handlePaginationChange(nextPage);
            }
          }}
          className="paginateArrow ml-[23px] rounded-l-[10.4px]"
        >
          <PagLeftArrow />
        </button>
        <span className="w-[1.3px] h-[31.2px] ml-[31px] mr-[55px] bg-vDividerColor "></span>
        {pageNumbers.map((number) => (
          <button
            key={number}
            className={paginatorNumStyles(number)}
            onClick={() => handlePaginationChange(number)}
          >
            {number}
          </button>
        ))}
        <span className="w-[1.3px] h-[31.2px] mr-[31px] ml-[55px] bg-vDividerColor "></span>
        <button
          onClick={() => {
            const nextPageParam = searchParams.get("page");
            let nextPage: number;
            if (typeof nextPageParam === "string") {
              nextPage = parseInt(nextPageParam) + 1;
              if (nextPage !== totalJobPages + 1)
                handlePaginationChange(nextPage);
            }
          }}
          className="paginateArrow mr-[23px] rounded-r-[10.4px]"
        >
          <PagRightArrow />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
