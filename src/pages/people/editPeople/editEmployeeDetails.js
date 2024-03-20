import React from "react";

const EditEmployeeDetails = (props) => {
  return (
    <div className="w-11/12">
      <div className="flex flex-row justify-start mt-6">
        <div className="w-80">
          <div className="flex"><h3 className="text-lg font-semibold">Tools</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <div className="flex flex-row mt-2 ">
            <div className="w-28">
              <p className="text-sm font-semibold">software</p>
              <p className="text-gray-400">Figma</p>
              <p className="text-gray-400">illustrator</p>
              <p className="text-gray-400">inDesign</p>
            </div>
            <div className="px-7 ">
              <p className="text-sm font-semibold">Skills</p>
              <p className="text-gray-400">Research</p>
              <p className="text-gray-400">sketching</p>
              <p className="text-gray-400">Markup</p>
            </div>
          </div>
        </div>
        <div className="mr-4 ">
        <div className="flex"><h3 className="text-lg font-semibold">Roll</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <div className="w-60">
            <p className="text-gray-400">Keeping the design consistent</p>
            <p className="text-gray-400"> Research about user experiance</p>
            <p className="text-gray-400">
              Exploring new UI/UX and brand strategies
            </p>
          </div>
        </div>
        <div>
        <div className="flex"><h3 className="text-lg font-semibold">Abilities</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <div className="w-60">
            <p className="text-gray-400">Keeping the design consistent</p>
            <p className="text-gray-400"> Research about user experiance</p>
            <p className="text-gray-400">
              Exploring new UI/UX and brand strategies
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="w-96">
        <div className="flex"><h3 className="text-lg font-semibold">Address</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <p className="w-60 text-gray-400">
            To change the state of the React component is useful when you are
            working on a single page application, it simply replaces the content
            of the existing component for the user without reloading the
            webpage.{" "}
          </p>
        </div>
        <div className="ml-25">
        <div className="flex"><h3 className="text-lg font-semibold">Overall Experiance</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">UX Designer:</span>ONEUX
            Creative Studio
          </p>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">UX Designer:</span>
            Netflix (2018-2019)
          </p>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">
              UI/UX Designer Intern :{" "}
            </span>
            Dope Designs{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="w-96">
        <div className="flex"><h3 className="text-lg font-semibold">Bio</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <p className="w-60 text-gray-400">
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Age :</span>80 years
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Date of Birth :</span>
              10th Jan 1920
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Gender : </span>
              Female
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Blood Group : </span>
              B+
            </p>
            <p className=" text-gray-400">
              <span className="font-semibold text-black">Language : </span>
              Kannada, English,Hindi
            </p>
          </p>
        </div>
        <div className="ml-25">
        <div className="flex"><h3 className="text-lg font-semibold">Communication</h3>
          <i class="ri-pencil-line font-extrabold text-blue-700 ml-2"></i></div>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">Mobile Number:</span>
            1234567890
          </p>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">Email ID :</span>
            xyz@gmail.com
          </p>
          <p className=" text-gray-400">
            <span className="font-semibold text-black">Skype ID : </span>
            5485sjbdja74398yh{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeDetails;
