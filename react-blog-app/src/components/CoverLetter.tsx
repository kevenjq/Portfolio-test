import CoverLetterFile from "../assets/CoverLetter.png";

const CoverLetter = () => {
  return (
    <div>
      <h2 className="relative text-center text-9xl h3-all font-bold px-1 py-3">
        CoverLetter
      </h2>
      <div className="group items-center">
        <img
          src={CoverLetterFile}
          className="delay-200 duration-500 group-hover:scale-125 group-hover:-translate-x-80 group-hover:-translate-y-15"
        />
      </div>
    </div>
  );
};

export default CoverLetter;
