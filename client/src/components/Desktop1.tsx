export default function Desktop1(props: Desktop1Props) {
    return (
      <div
        className="relative bg-yellow-50 w-[1440px] h-[1024px] overflow-clip"
        style={props.style}
      >
        <div
          className="left-0 top-px absolute w-[1440px] h-[139px] bg-gradient-to-b from-[rgba(73,85,121,1)] to-[rgba(217,217,217,0)] rounded-[30px]"
         />
        <div
          className="[rotate:180deg] origin-top-left absolute w-[1440px] h-[139px] left-[1440px] top-[1024px] bg-gradient-to-b from-[rgba(38,49,89,1)] to-[rgba(217,217,217,0)] rounded-[30px]"
         />
      </div>
    );
  }

  Desktop1.defaultProps = {
    style: {},
  };

  interface Desktop1Props {
    style: Object;
  }

  /**
   * This component was generated from Figma with FireJet.
   * Learn more at https://www.firejet.io/
   *
   * README:
   * The output code may look slightly different when copied to your codebase. To fix this:
   * 1. Include the necessary fonts. The required fonts are imported from public/index.html
   * 2. Include the global styles. They can be found in App.css
   *
   * Note: Step 2 is not required for tailwind.css output
   */