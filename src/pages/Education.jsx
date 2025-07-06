import React from "react";

const Education = () => {
  return (
    <div className="pt-20 bg-white dark:bg-black text-black dark:text-white min-h-screen px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-8">
          Education
        </h1>

        <div className="space-y-8">
          {/* MCA */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Master of Computer Applications (MCA)</h2>
            <p className="text-blue-600 dark:text-blue-400">Modern College of Engineering, Pune</p>
            <p>2023 - Present</p>
            <p className="mt-2">
              Currently pursuing MCA with a focus on software development, web technologies,
              and project-based learning.
            </p>
          </div>

          {/* Bachelors */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Bachelor of Science in Computer Science</h2>
            <p className="text-blue-600 dark:text-blue-400">[Your University Name Here]</p>
            <p>2020 - 2023</p>
            <p className="mt-2">
              Studied core computer science subjects including programming, algorithms,
              database management systems, and software engineering.
            </p>
          </div>

          {/* HSC / SSC */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Higher Secondary Certificate (HSC)</h2>
            <p className="text-blue-600 dark:text-blue-400">[Your College Name Here]</p>
            <p>2018 - 2020</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold">Secondary School Certificate (SSC)</h2>
            <p className="text-blue-600 dark:text-blue-400">[Your School Name Here]</p>
            <p>2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
