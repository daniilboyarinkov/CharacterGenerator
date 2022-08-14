import useWindowDimensions from "./useWindowDimensions"

/**
 * checks whether screen size is as mobile or not
 * @param {number} width screen width number
 * @returns boolean
 */
const checkMobile = (width) => width < 720

export default function useDevice() {
  return { isMobile: checkMobile(useWindowDimensions().width) }
}
