import FooterNavLinks from "./footer-nav-links";
export default function Footer() {
  return (
    <div className="flex flex-col 2xl:w-3/4 w-11/12 mb-4 bg-emerald-900 text-white">
      <p className="flex justify-center xl:text-base text-[8px] mt-2">
        Restore - Don't replace.
      </p>
      <div className="flex flex-row xl:text-base text-[8px]">
        <FooterNavLinks />
      </div>
      <p className="flex justify-center xl:text-base text-[8px] text-center mb-2">
        Copyright © 2009 Avenue Marble Restoration Ltd. All rights reserved.
      </p>
    </div>
  );
}
