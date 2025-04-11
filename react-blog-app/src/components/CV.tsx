import CvFile from "../assets/CV.pdf";

const CV = () => {
  return (
    <div>
      <h2 className="relative text-center text-9xl h3-all font-bold px-1 py-3">
        CV
      </h2>
      <div className="group">
        <img
          src={CvFile}
          className="delay-200 duration-700 group-hover:scale-125 group-hover:translate-x-80 group-hover:-translate-y-15"
        />
      </div>
    </div>
  );
};

export default CV;
