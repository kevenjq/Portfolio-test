import { useState } from "react";

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const validate = () => {
    let valid = true;
    const newErrors = { email: "", firstName: "", lastName: "" };

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      valid = false;
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="max-w-full h-[703px]  flex items-center bg-amber-100">
      <div className="max-w-max max-h-150 mx-auto mt-10 p-8 flex flex-row justify-between items-center gap-20 bg-amber-300 rounded-2xl">
        <div className="isolate mx-auto p-8 max-w-md max-h-119 rounded-2xl bg-cyan-300 shadow-2xl">
          <h2 className="h3-all text-left">Contact Information</h2>
          <h5 className="text-left">
            Basic Information about myself below,
            <br />
            If you would like to contact me please fill out the form
          </h5>

          <div className="flex flex-row items-start justify-evenly min-w-10">
            <div className=" h-full w-full flex flex-col gap-2 text-left ">
              <PhoneIcon />
              <EmailIcon />
              <AddressIcon />
            </div>
            <div className=" about-me-h1 text-right ">
              <h5>+49 152 19575933</h5>
              <h5>Kevenjq07@gmail.com</h5>
              <h5>Berlin, Germany</h5>
            </div>
          </div>
          <div className="flex flex-row place-items-center justify-center gap-18 max-w-md mt-4 ">
            <a
              href="https://www.linkedin.com/in/kevenquevedo"
              target="_blank"
              className="text-black hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://buymeacoffee.com/keven"
              target="_blank"
              className="flex flex-col text-center items-center  text-black "
            >
              <span className="duration-200 hover:text-red-500 translate hover:-translate-y-3 hover:scale-110">
                <HeartIcon />
              </span>
            </a>

            <a
              href="https://github.com/kevenjq"
              target="_blank"
              className="text-black hover:scale-100 active:text-white"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-md max-h-max p-4 rounded-2xl">
          <h2 className="h3-all text-xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between gap-3 ">
              <div className="mb-4">
                <label className="block font-medium">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-2xl outline-2 outline-black focus:outline-2 focus:outline-white"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block font-medium">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 rounded-2xl outline-2 outline-black focus:outline-2 focus:outline-white"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-2xl outline-2 outline-black focus:outline-2 focus:outline-white"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 rounded-2xl outline-2 outline-black focus:outline-2 focus:outline-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full transition ease-in-out bg-blue-500 text-white p-2 rounded hover:bg-blue-600 hover:scale-100"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fill-rule="evenodd"
        d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
function AddressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-6"
    >
      <path
        fill-rule="evenodd"
        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="currentColor"
      className="bi bi-balloon-heart"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"
      />
    </svg>
  );
}
export default CompanyForm;
