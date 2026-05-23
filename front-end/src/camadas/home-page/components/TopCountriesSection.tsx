import DashboardSectionHeader from "@/components/DashboardSectionHeader";
import { TOP_COUNTRIES } from "../constants";

function TopCountriesSection() {
  return (
    <div className="col-span-12 mt-4 md:col-span-4 lg:col-span-3 md:mt-7">
      <DashboardSectionHeader title="Top Countries" viewMoreHref="" />
      <div className="p-5 mt-4 intro-y box">
        {TOP_COUNTRIES.map((country, index) => (
          <div
            key={`${country.name}-${index}`}
            className="flex items-center mb-5 last:mb-0"
          >
            <div className="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden">
              <img
                className="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                alt="Rocketman Tailwind HTML Admin Template"
                src={country.flagUrl}
              />
            </div>
            <div className="pr-5 ml-3 truncate">{country.name}</div>
            <div className="ml-auto">{country.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCountriesSection;
