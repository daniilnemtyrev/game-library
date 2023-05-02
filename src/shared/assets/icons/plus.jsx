export const Plus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="SVGInline-svg game-card-button__icon-svg game-card-button__icon_12-svg game-card-button__icon_with-offset-svg"
    viewBox="0 0 12 12"
    {...props}
  >
    <g fill="white" fillRule="evenodd">
      <rect width={3} height={12} x={4.5} rx={0.75} />
      <rect
        width={3}
        height={12}
        x={4.5}
        rx={0.75}
        transform="rotate(-90 6 6)"
      />
    </g>
  </svg>
);
