import * as React from "react";
import { Popover } from "@base-ui-components/react/popover";

import CoverLetter from "../assets/CoverLetter.png";
import CV from "../assets/CV.pdf";

const ExamplePopover = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger
        onPointerEnter={() => setOpen(true)}
        onPointerLeave={() => setOpen(false)}
        className="flex size-10 items-center justify-center rounded-lg bg-[canvas] text-gray-900 select-none cursor-pointer -outline-offset-1  outline-gray-[canvas] data-[popup-open]:bg-gray-[canvas]"
      >
        <DownloadIcon aria-label="Download" />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner
          sideOffset={4}
          onPointerEnter={() => setOpen(true)} // Prevent closing when moving to popup
          onPointerLeave={() => setOpen(false)} // Close when leaving the popup
        >
          <Popover.Popup className="origin-[var(--transform-origin)] select-none rounded-lg bg-[canvas] px-6 py-4 text-gray-900 shadow-lg shadow-gray-300 outline outline-gray-100 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <Popover.Title className="text-base font-medium flex items-center justify-center">
              <span className="text-green-800">Download?</span>
            </Popover.Title>
            <Popover.Description className="text-base flex flex-col items-center text-gray-600 text-center">
              If you want to download the file, click the button below!
              <div className="flex flex-col items-center gap-3 mt-4 w-full">
                <div className="rounded-lg flex justify-center bg-emerald-500 w-1/3 px-2 py-1">
                  <a
                    href={CV}
                    download={"CV.pdf"}
                    className="outline-0 font-semibold text-white "
                    style={{ textDecoration: "none" }}
                  >
                    CV
                  </a>
                </div>
                <div className="rounded-lg flex justify-center bg-emerald-500 w-1/3 px-2 py-1">
                  <a
                    href={CoverLetter}
                    download={"CoverLetter.png"}
                    className="outline-0 font-semibold text-white "
                    style={{ textDecoration: "none" }}
                  >
                    Cover Letter
                  </a>
                </div>
              </div>
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
};

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

export default ExamplePopover;

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="size-6"
>
  <path
    fillRule="evenodd"
    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
    clipRule="evenodd"
  />
</svg>;
