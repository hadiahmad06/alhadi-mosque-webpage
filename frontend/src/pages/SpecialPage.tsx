import SectionHeading from "@/components/SectionHeading";

const SpecialPage = () => {
  return (
    <div className="section-container">
      <SectionHeading 
        title="Ramadhan Kareem"
        subtitle="May Allah bless us all in the holy month of Ramadan"
      />

      <div className="glass-card p-6 text-center">
        <p className="text-lg font-amiri">
          Al Hadi Organization is following moon sighting for Islamic months.
        </p>
        <p className="text-lg font-amiri mt-2">
          According to moon sighting, the first of Ramadhan is on <span className="font-bold">March 1, 2025</span>.
        </p>
        <p className="text-lg font-amiri mt-2">
          At Al Hadi, we will be performing <span className="font-bold">20 rakats Taraweeh</span> and will complete a full Quran recitation, In Sha Allah.
        </p>
        <p className="text-lg font-amiri mt-2">
          There is a separate space available for sisters.
        </p>
        <p className="text-lg font-amiri mt-2">
          Taraweeh prayer will be offered <span className="font-bold">after Isha prayer</span>.
        </p>
      </div>
      <div className="flex justify-center">
        <img 
          src="https://lh6.googleusercontent.com/Q5pFYhF4eq3i5mnWUZ_oAiqCN864o950S6-BXQomulLOS6mFLA8pUPPxhrp9WTZE8u4Kth7rievppEPpv2nbC4JB3noUNItHf3Npg-8jmgOzkEuzcNuY8R4JPMHty-EN0g=w1280"
          alt="Ramadhan 2025 Schedule"
          width={800} 
          height={400} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SpecialPage;
