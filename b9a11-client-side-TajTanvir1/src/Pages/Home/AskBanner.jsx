import AskTyper from "./AskTyper";

const AskBanner = () => {
  return (
    <div>
      <div className="w-full mx-auto bg-center bg-[url('https://i.ibb.co/7QBHDMn/Banner-Bgpng.png')] bg-no-repeat mt-8">
        <div className="h-[300px] pt-10">
          <AskTyper></AskTyper>
        </div>
      </div>
    </div>
  );
};

export default AskBanner;
