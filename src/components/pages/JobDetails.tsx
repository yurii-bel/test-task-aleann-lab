import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Bookmark from "../elementsUI/Bookmark";
import ShareIcon from "../elementsUI/ShareIcon";
import { AiOutlineStar } from "react-icons/ai";
import TimeFromDays from "../utils/TimeFromDays";
import ArrowBtn from "../elementsUI/ArrowBtn";
import LocationIcon from "../elementsUI/LocationIcon";
import TextFormatMadness from "../utils/TextFormatMadness";

type JobDetailsProps = {
  title: string;
  pictures: Array<string>;
  updatedAt: string;
  description: string;
  salary: string;
  employment_type: Array<string>;
  benefits: Array<string>;
  name: string;
  address: string;
  phone: string;
  email: string;
};

const initJobDetails = {
  title: "",
  pictures: [],
  updatedAt: "",
  description: "",
  salary: "",
  employment_type: [],
  benefits: [],
  name: "",
  address: "",
  phone: "",
  email: "",
};

const JobDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [jobPost, setJobPost] = useState<JobDetailsProps>(initJobDetails);

  const days: number = Math.floor(
    (Date.now() - new Date(jobPost["updatedAt"]).getTime()) / (1000 * 3600 * 24)
  );

  useEffect(() => {
    if (location.state?.jobPost) {
      setJobPost(location.state?.jobPost);
    }
  }, [location.state?.jobPost]);

  function randomNumber(min: number = 10, max: number = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const rN1 = randomNumber();
  const rN2 = randomNumber();
  const rN3 = randomNumber();

  const getSalaryText = () => {
    return "€ " + jobPost["salary"].replace(/k/g, " 000").split("-").join("—");
  };

  const employmentType = () =>
    jobPost["employment_type"].map((emp, index) => (
      <button key={index} className="accentButtonBlue">
        {emp}
      </button>
    ));
  const benefits = () =>
    jobPost["benefits"].map((emp, index) => (
      <button key={index} className="accentButtonYellow">
        {emp}
      </button>
    ));

  const attachedImages = () =>
    jobPost["pictures"].map((pic, index) => (
      <img
        className="min-w-[200px] h-[133px] rounded-xl"
        key={index}
        src={`${pic?.slice(0, -3)}?random=${index}`}
      />
    ));

  return (
    <>
      <div className="flex justify-center flex-col space-x-0 mt-[20px] md:mt-[56px] md:flex-row md:space-x-[12px] lg:space-x-[82px]">
        {/* Job Details content left block */}
        <div className="flex justify-start items-center flex-wrap max-w-full md:w-[723px] flex-col px-[15px] ">
          {/* Job Details header */}
          <div className="flex flex-col w-full justify-between md:flex-row">
            <h2 className="text-mainColor font-bold text-[28px]">
              Job Details
            </h2>
            <div className="block mt-[12px] mb-[24px] separator md:hidden"></div>
            <div className="flex justify-start items-center space-x-[31px]">
              <div className="flex -ml-4 justify-center items-center space-x-4 md:ml-0">
                <span className="hidden md:block">
                  <Bookmark />
                </span>
                {/* Mobile Bookmark icon */}
                <span className="block md:hidden">
                  <AiOutlineStar
                    size={"23px"}
                    color="#3A4562"
                    fontWeight={"700"}
                  />
                </span>
                <h3 className="supportText">Save to my list</h3>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <ShareIcon />
                <h3 className="supportText">Share</h3>
              </div>
            </div>
          </div>
          <div className="hidden separator md:block"></div>
          <button className="hidden self-start mainButton uppercase my-[39px] px-[30px] py-[18px] md:block">
            apply now
          </button>

          <div className="flex self-start justify-between w-full space-x-0 items-start flex-col md:space-x-[60px] md:flex-row">
            <div className="mt-[32px] md:mt-0">
              <span className="text-mainColor font-bold text-2xl ">
                {jobPost.title}
              </span>
              <div className="absolute mt-1.5 w-[160px] ss:w-[240px] sm:w-[500px] font-mainText text-accentColor text-lg opacity-40 md:block">
                {`Posted ${TimeFromDays(days)} ago`}
              </div>
            </div>
            <div className="w-full flex justify-start flex-col md:max-w-[160px] md:flex-col-reverse  md:justify-end">
              <span className="self-end text-lg font-mainText text-accentColor md:text-mainColor md:self-start ">
                Brutto, per year
              </span>
              <h2 className="self-end font-bold text-[20px] text-mainColor md:self-start ">
                {getSalaryText()}
              </h2>
            </div>
          </div>
          {/* Description text*/}
          <div className="flex justify-center items-center w-fit text-mainColor leading-6 mt-[7px] md:mt-[25px]">
            <div className="whitespace-pre-line font-mainText text-lg text-[#38415D] opacity-80">
              {TextFormatMadness(jobPost["description"])}
            </div>
          </div>
          <button className="mt-6 mainButton uppercase my-[39px] px-[30px] py-[18px] md:self-start">
            apply now
          </button>
          {/* Additional info & attached images flex container */}
          <div className="self-start flex flex-col-reverse w-full overflow-x-hidden md:flex-col">
            {/* Additional info */}
            <div className="self-start w-full">
              <h2 className="self-start mt-[55px] text-mainColor font-bold text-[28px] md:mt-0">
                Additional info
              </h2>
              <div className="separator mt-[9px]"></div>
              <h4 className="self-start font-mainText text-lg supportText mt-[15px] mb-[10px]">
                Employment type
              </h4>
              <div className="flex justify-start items-center space-x-[8px]">
                {employmentType()}
              </div>
              <h4 className="self-start font-mainText text-lg supportText mt-[23px] mb-[10px]">
                Benefits
              </h4>
              <div className="flex flex-wrap justify-start items-center space-x-[8px]">
                {benefits()}
              </div>
            </div>
            {/* Attached images */}
            <div className="self-start overflow-hidden">
              <h2 className="mt-[87px] text-mainColor font-bold text-[28px]">
                Attached images
              </h2>
              <div className="separator mt-[9px]"></div>
              <h4 className="self-start text-mainColor mb-[10px]"></h4>
              <div className="flex justify-start items-center space-x-4">
                {attachedImages()}
              </div>
            </div>
          </div>
          {/* Contacts */}
          <div className="md:hidden self-start w-full ">
            <h2 className="self-start mt-[55px] text-mainColor font-bold text-[28px] md:mt-0">
              Contacts
            </h2>
            <div className="separator mt-[9px]"></div>
            <div className="w-full flex justify-center items-center">
              {/* Map block mobile*/}
              <div className="mt-[21px] overflow-hidden bg-[#2A3047] w-[372px] h-[436px] rounded-lg ">
                <div className="relative h-[218px] flex justify-start items-center overflow-hidden">
                  {/* Department name */}
                  <div className="absolute z-10 flex flex-col flex-wrap space-y-2 text-[#E7EAF0] pl-20">
                    <div className="flex flex-col font-bold">
                      <span>Depatment name.</span>
                      <span>{jobPost["name"]}.</span>
                    </div>

                    <div className="flex flex-row space-x-1">
                      <span>
                        <LocationIcon />
                      </span>
                      <span> {jobPost["address"]}</span>
                    </div>
                    <span>{jobPost["phone"]}</span>
                    <span>{jobPost["email"]}</span>
                  </div>
                  <div className="-translate-x-20 circle h-[273px] aspect-square bg-[#202336] rounded-full"></div>
                </div>
                <div className="contactMap w-[584px] h-[728px]">
                  <img src="https://imgsrv2.voi.id/47cX2NIfPXTvJbg6fuAfnvt0h2AMi46GRQVxi8_lcfE/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xMDcwODQvdm9pLWNhcmEtYWt0aWZrYW4tbW9kZS1nZWxhcC1kaS1nb29nbGUtbWFwcy5qcGc.jpg" />
                </div>
              </div>
            </div>
          </div>

          <button
            className="self-center sm:self-start xl:-translate-x-20 flex justify-center mt-24 items-center hover:cursor-pointer returnButton mb-[162px]"
            onClick={() => navigate(-1)}
          >
            <span className="mr-2 font-bold text-lg">
              <ArrowBtn />
            </span>
            return to job board
          </button>
          {/* <div className="mt-64"></div> */}
        </div>
        {/* Map block*/}
        <div className="hidden overflow-hidden bg-[#2A3047] lg:w-[402px] h-[436px] rounded-lg md:block md:w-[201px]">
          <div className="relative h-[218px] flex justify-start items-center overflow-hidden">
            {/* Department name */}
            <div className="absolute z-10 flex flex-col flex-wrap space-y-2 text-[#E7EAF0] lg:pl-20 md:pl-1">
              <div className="flex flex-col font-bold">
                <span>Depatment name.</span>
                <span>{jobPost["name"]}.</span>
              </div>

              <div className="flex flex-row space-x-1">
                <span>
                  <LocationIcon />
                </span>
                <span> {jobPost["address"]}</span>
              </div>
              <span>{jobPost["phone"]}</span>
              <span>{jobPost["email"]}</span>
            </div>
            <div className="-translate-x-20 circle h-[273px] aspect-square bg-[#202336] rounded-full"></div>
          </div>
          <div className="contactMap w-[584px] h-[728px]">
            <img src="https://imgsrv2.voi.id/47cX2NIfPXTvJbg6fuAfnvt0h2AMi46GRQVxi8_lcfE/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xMDcwODQvdm9pLWNhcmEtYWt0aWZrYW4tbW9kZS1nZWxhcC1kaS1nb29nbGUtbWFwcy5qcGc.jpg" />
            {/* <iframe src="https://www.google.com/"></iframe> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
