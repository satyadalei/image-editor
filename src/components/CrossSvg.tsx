interface Dimension{
    width ?: number,
    height ?: number
}

const CrossSvg : React.FC<Dimension> = ({width,height}) => {
  if (width === undefined) {
    width = 50;
  }
  if (height === undefined) {
    height = 50;
  } 
  return (
    <svg
    className="text-white/15"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
  )
}

export default CrossSvg