import tw from "twin.macro";

const TwFormSection = tw.section`animate-fade-in flex flex-col gap-5 lg:gap-60 justify-between pb-10 border-b md:gap-20  md:flex-row`
export const TwFormSectionHeader = tw.section`w-full md:w-96 flex flex-col gap-2`
export const TwFormSectionTitle = tw.h1`font-bold text-zinc-800`
export const TwFormSectionDescription = tw.h2`text-sm text-zinc-500`
export const TwFormSectionBody = tw.section`w-full flex flex-col gap-5 lg:flex-row lg:gap-10`
export const TwFormSectionRow = tw.div`flex flex-row gap-10`
export default TwFormSection