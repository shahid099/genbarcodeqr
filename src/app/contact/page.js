"use client"
const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Contact Me
        </h1>
        <p className="text-lg text-center text-gray-700">
          I&#39;m <span className="font-semibold">Muhammad Shahid</span>, a{" "}
          <strong>MERN Stack Developer</strong> specializing in{" "}
          <strong>Next.js</strong> and <strong>React.js</strong>. With 2 years
          of experience in building dynamic, responsive web applications, I am
          here to help you bring your ideas to life. Whether you need
          development services or consultation on selecting the right tech
          stack, feel free to reach out!
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Get in Touch
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              📧 <strong>Email:</strong>{" "}
              <a
                href="mailto:mshahidking099@gmail.com"
                className="text-blue-500 underline"
              >
                mshahidking099@gmail.com
              </a>
            </li>
            <li>
              🌐 <strong>GitHub:</strong>{" "}
              <a
                href="https://www.github.com/shahid099"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit My Profile
              </a>
            </li>
            <li>
              🌐 <strong>Facebook:</strong>{" "}
              <a
                href="www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Visit My Profile
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
          <p className="text-gray-700">
            As an experienced web developer, I specialize in crafting sleek,
            efficient websites using the <strong>MERN stack</strong> (MongoDB,
            Express.js, React.js, Node.js). I also integrate{" "}
            <strong>ChatGPT APIs</strong> into websites, bringing the power of
            AI to life.
          </p>
          <p className="text-gray-700">
            I am proficient in <strong>JavaScript, TypeScript, Java,</strong> and{" "}
            <strong>Python</strong>. When I am not coding, I spend time exploring
            AI technologies and their applications.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Let&#39;s Collaborate!
          </h2>
          <p className="text-gray-700">
            Whether you need a new website, consultation, or integration with
            ChatGPT, I am here to help.
          </p>
        </div>

        <button
          className="w-full px-6 py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          onClick={() => (window.location.href = "mailto:mshahidking099@gmail.com")}
        >
          Send Me an Email
        </button>
      </div>
    </div>
  )
}

export default page