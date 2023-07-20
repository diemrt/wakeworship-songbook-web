import tw from "twin.macro";

const TwLoadingCard = tw.section`animate-pulse flex flex-col w-full gap-3`
export const TwLoadingHeader = tw.div`bg-zinc-900 opacity-10 w-full rounded h-7`
export const TwLoadingBody = tw.div`flex gap-2 w-full`
export const TwLoadingFooter = tw.div`flex flex-col w-full justify-end gap-3 mt-5`
export const TwLoadingRow = tw.div`bg-zinc-900 opacity-10 rounded h-5 w-full`
export default TwLoadingCard