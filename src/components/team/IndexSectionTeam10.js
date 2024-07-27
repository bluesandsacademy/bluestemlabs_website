import React from "react";
import { team } from "../../data";

export default function IndexSectionTeam10() {
  return (
    <React.Fragment>
      <>
        <section className="relative py-20 md:py-24 overflow-hidden ">
          <img
            className="absolute top-0 left-0"
            src="saturn-assets/images/team/light-blue.png"
            alt="background"
          />
          <img
            className="absolute bottom-0 right-0 mr-32"
            src="saturn-assets/images/team/light-orange.png"
            alt="background"
          />
          <div className="relative container mx-auto">
            <div className="max-w-2xl lg:max-w-3xl mx-auto xl:max-w-7xl ">
              <div className="flex flex-wrap mb-20 -mx-4 items-center">
                <div className="w-full xl:w-1/2 px-4">
                  <div>
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mb-8">
                      <span>Get to know our amazing</span>
                      <span className="font-serif italic text-[#1980E7]">
                        Team
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="w-full xl:w-1/2 px-4">
                  <div className="max-w-md xl:ml-auto">
                    <p className="text-lg text-gray-500 mb-6">
                      We have a rich diverse team with decades of industry
                      experience that brings a unique perspective to our work.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-center items-start">
                {team.map((member, index) => (
                  <div
                    className="p-4 mb-12 border rounded-lg shadow-2xl transform transition-transform duration-700 hover:scale-110 w-full sm:w-1/2 lg:w-1/4"
                    key={index}
                  >
                    <div className="text-center flex flex-col items-center justify-center">
                      <img
                        className="block mb-4 h-72 w-72 object-cover rounded-full"
                        src={member.imgSrc}
                        alt={member.fullName}
                      />
                      <h5 className="text-2xl font-semibold text-gray-900 mb-2">
                        {member.fullName}
                      </h5>
                      <span className="text-gray-500">{member.role}</span>
                      <p>{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
