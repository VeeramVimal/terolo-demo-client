/** @format */

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MultipleSelection from "./MultipleSelection";
const listData = [
  "maxim-cummings-Full stack developer",
  "maxim-cummings-Front-End Developer",
  "maxim-cummings-Backend-End Developer",
  "maxim-cummings-Designer",
];
function Projectdetails() {
  const [showModal, setShowModal] = useState(false);
  const [queryClient, setQueryClient] = useState("");
  const [clientData, setClientData] = useState(listData);
  const [clientList, setClientList] = useState("");
  const [showClient, setShowClient] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);

  const [queryProject, setQueryProject] = useState("");
  const [projectData, setProjectData] = useState(listData);
  const [projectList, setProjectList] = useState("");
  const [showProject, setShowProject] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const [queryDesign, setQueryDesign] = useState("");
  const [designData, setDesignData] = useState(listData);
  const [designList, setDesignList] = useState("");
  const [showDesign, setShowDesign] = useState(false);
  const [showDesignModal, setShowDesignModal] = useState(false);

  const [queryDev, setQueryDev] = useState("");
  const [devData, setDevData] = useState(listData);
  const [devList, setDevList] = useState("");
  const [showDev, setShowDev] = useState(false);
  const [showDevModal, setShowDevModal] = useState(false);

  const [queryTesting, setQueryTesting] = useState("");
  const [testingData, setTestingData] = useState(listData);
  const [testingList, setTestingList] = useState("");
  const [showTesting, setShowTesting] = useState(false);
  const [showTestingModal, setShowTestingModal] = useState(false);

  const [queryTeam, setQueryTeam] = useState("");
  const [teamData, setTeamData] = useState(listData);
  const [teamList, setTeamList] = useState("");
  const [showTeam, setShowTeam] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  //   client
  useEffect(() => {
    if (queryClient) {
      const searchData = clientData?.filter((item) =>
        item.toLowerCase().includes(queryClient.toLowerCase())
      );
      setClientData(searchData);
    }
    if (queryClient === "") {
      setClientData(listData);
    }
  }, [queryClient]);

  //   project
  useEffect(() => {
    if (queryProject) {
      const searchData = projectData?.filter((item) =>
        item.toLowerCase().includes(queryProject.toLowerCase())
      );
      setProjectData(searchData);
    }
    if (queryProject === "") {
      setProjectData(listData);
    }
  }, [queryProject]);

  //   design

  useEffect(() => {
    if (queryDesign) {
      const searchData = designData?.filter((item) =>
        item.toLowerCase().includes(queryDesign.toLowerCase())
      );
      setDesignData(searchData);
    }
    if (queryClient === "") {
      setDesignData(listData);
    }
  }, [queryDesign]);

  useEffect(() => {
    if (queryDev) {
      const searchData = devData?.filter((item) =>
        item.toLowerCase().includes(queryDev.toLowerCase())
      );
      setDevData(searchData);
    }
    if (queryDev === "") {
      setDevData(listData);
    }
  }, [queryDev]);

  useEffect(() => {
    if (queryTesting) {
      const searchData = testingData?.filter((item) =>
        item.toLowerCase().includes(queryTesting.toLowerCase())
      );
      setTestingData(searchData);
    }
    if (queryTesting === "") {
      setTestingData(listData);
    }
  }, [queryTesting]);

  useEffect(() => {
    if (queryTeam) {
      const searchData = teamData?.filter((item) =>
        item.toLowerCase().includes(queryTeam.toLowerCase())
      );
      setTeamData(searchData);
    }
    if (queryTeam === "") {
      setTeamData(listData);
    }
  }, [queryTeam]);

  const removeClient = (index) => {
    clientList.splice(index, 1);
    setClientList([...clientList]);
  };
  const removeProject = (index) => {
    projectList.splice(index, 1);
    setProjectList([...projectList]);
  };
  const removeDesign = (index) => {
    designList.splice(index, 1);
    setDesignList([...designList]);
  };
  const removeDev = (index) => {
    devList.splice(index, 1);
    setDevList([...devList]);
  };
  const removeTesting = (index) => {
    testingList.splice(index, 1);
    setTeamList([...testingList]);
  };
  const removeTeam = (index) => {
    teamList.splice(index, 1);
    setTeamList([...teamList]);
  };

  return (
    <>
      <div className="text-textcolor font-[600] text-[16px] mb-6 ">
        About project
        <input
          type="text"
          className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
          placeholder="Summary"
        />
      </div>

      {/* client */}

      <MultipleSelection
        title={"Clients"}
        showModal={showClientModal}
        setShowModal={setShowClientModal}
        list={clientList}
        setList={setClientList}
        remove={removeClient}
        setQuery={setQueryClient}
        show={showClient}
        setShow={setShowClient}
        data={clientData}
      />

      {/* project lead */}

      <MultipleSelection
        title={"Project Lead"}
        showModal={showProjectModal}
        setShowModal={setShowProjectModal}
        list={projectList}
        setList={setProjectList}
        remove={removeProject}
        setQuery={setQueryProject}
        show={showProject}
        setShow={setShowProject}
        data={projectData}
      />

      {/* design lead */}
      <MultipleSelection
        title={"Design Lead"}
        showModal={showDesignModal}
        setShowModal={setShowDesignModal}
        list={designList}
        setList={setDesignList}
        remove={removeDesign}
        setQuery={setQueryDesign}
        show={showDesign}
        setShow={setShowDesign}
        data={designData}
      />

      {/* dev lead */}
      <MultipleSelection
        title={" Development Lead"}
        showModal={showDevModal}
        setShowModal={setShowDevModal}
        list={devList}
        setList={setDevList}
        remove={removeDev}
        setQuery={setQueryDev}
        show={showDev}
        setShow={setShowDev}
        data={devData}
      />

      {/* Testing */}
      <MultipleSelection
        title={" Testing Lead"}
        showModal={showTestingModal}
        setShowModal={setShowTestingModal}
        list={testingList}
        setList={setTestingList}
        remove={removeTesting}
        setQuery={setQueryTesting}
        show={showTesting}
        setShow={setShowTesting}
        data={testingData}
      />

      {/* team*/}
      <MultipleSelection
        title={" Team"}
        showModal={showTeamModal}
        setShowModal={setShowTeamModal}
        list={teamList}
        setList={setTeamList}
        remove={removeTeam}
        setQuery={setQueryTeam}
        show={showTeam}
        setShow={setShowTeam}
        data={teamData}
      />
    </>
  );
}

export default Projectdetails;
