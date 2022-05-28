import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl text-center my-5 font-bold">About me</h1>
      <div className="grid grid-cols-1 gap-y-5 lg:gap-2 lg:grid-cols-2">
        <div className="shadow-lg p-10 rounded-lg">
          <div className="">
            <h4 className="text-2xl uppercase text-left text-success font-bold ">
              Basic Info
            </h4>
            <h3 className="text-xl font-bold mt-4">
              Name: Md.Kowser Ahammed Zihad
            </h3>
            <h3 className="text-xl font-bold mt-4">
              Email: mdzihad2244@gmail.com
            </h3>
            <div>
              <h3 className="text-xl font-bold mt-4">
                Educational Background:
              </h3>
              <p>
                Currently I am in college. Name of college aere school and
                college
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mt-4 capitalize">
                Some of my project
              </h4>
              <ul>
                <li>
                  Todo App :
                  <a
                    className="link ml-2 text-sky-900"
                    rel="noreferrer"
                    href="https://todo-app-762b7.web.app"
                    target="_blank"
                  >
                    Visit
                  </a>
                </li>
                <li>
                  Big Store :
                  <a
                    className="link ml-2 text-sky-900"
                    rel="noreferrer"
                    href="https://big-store-6aa59.web.app"
                    target="_blank"
                  >
                    Visit
                  </a>
                </li>
                <li>
                  Thorough Travel :
                  <a
                    className="link ml-2 text-sky-900"
                    rel="noreferrer"
                    href="https://thorough-travel.web.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="shadow-lg p-10 ">
          <h4 className="text-xl uppercase text-left text-success font-bold">
            technologies or skills
          </h4>
          <div className="mt-3">
            <h3 className="text-xl font-bold uppercase">html</h3>
            <progress
              className="progress progress-accent w-full"
              value="99"
              max="100"
            ></progress>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold uppercase">css</h3>
            <progress
              className="progress progress-info w-full"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold uppercase">javascript</h3>
            <progress
              className="progress progress-warning w-full"
              value="95"
              max="100"
            ></progress>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold uppercase">react js</h3>
            <progress
              className="progress progress-error w-full"
              value="98"
              max="100"
            ></progress>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-bold uppercase">mongodb</h3>
            <progress
              className="progress progress-accent w-full"
              value="85"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
