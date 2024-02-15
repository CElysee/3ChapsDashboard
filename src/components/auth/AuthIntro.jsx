import React from "react";

function AuthIntro() {
  return (
    <>
      <div className="container fixed inset-0 grid h-screen w-screen grid-cols-12 pl-14 pr-12 lg:max-w-[1550px] xl:px-24 2xl:max-w-[1750px]">
        <div className="relative h-screen col-span-12 lg:col-span-5 2xl:col-span-4 z-20 after:bg-white after:hidden after:lg:block after:content-[''] after:absolute after:right-0 after:inset-y-0 after:bg-gradient-to-b after:from-white after:to-slate-100/80 after:w-[800%] after:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0] before:content-[''] before:hidden before:lg:block before:absolute before:right-0 before:inset-y-0 before:my-6 before:bg-gradient-to-b before:from-white/10 before:to-slate-50/10 before:bg-white/50 before:w-[800%] before:-mr-4 before:rounded-[0_1.2rem_1.2rem_0/0_1.7rem_1.7rem_0]"></div>
        <div className="h-full col-span-7 2xl:col-span-8 lg:relative before:content-[''] before:absolute before:lg:-ml-10 before:left-0 before:inset-y-0 before:bg-gradient-to-b before:from-theme-1 before:to-theme-2 before:w-screen before:lg:w-[800%] after:content-[''] after:absolute after:inset-y-0 after:left-0 after:w-screen after:lg:w-[800%] after:bg-texture-white after:bg-fixed after:bg-center after:lg:bg-[25rem_-25rem] after:bg-no-repeat">
          <div className="sticky top-0 z-10 flex-col justify-center hidden h-screen ml-16 lg:flex xl:ml-28 2xl:ml-36">
            <div className="text-[2.6rem] font-medium leading-[1.4] text-white xl:text-5xl xl:leading-[1.2]">
              Your cravings’ plug @norrsken_eastafrica and @l___espace
            </div>
            <div className="mt-5 text-base leading-relaxed text-white/70 xl:text-lg">
              Wherever you are, whatever you crave – our catering brings the
              feast to you. Your wish is our command! #3chaps #weknowyourhungry
              #Catering
            </div>
            <div className="flex flex-col gap-3 mt-10 xl:flex-row xl:items-center">
              <div className="flex items-center">
                <div className="image-fit zoom-in h-9 w-9 2xl:h-11 2xl:w-11">
                  <img
                    data-placement="top"
                    title="Cate Blanchett"
                    src="assets/images/users/user8-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                    className="tooltip cursor-pointer rounded-full border-[3px] border-white/50"
                  />
                </div>
                <div className="-ml-3 image-fit zoom-in h-9 w-9 2xl:h-11 2xl:w-11">
                  <img
                    data-placement="top"
                    title="Julia Roberts"
                    src="assets/images/users/user10-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                    className="tooltip cursor-pointer rounded-full border-[3px] border-white/50"
                  />
                </div>
                <div className="-ml-3 image-fit zoom-in h-9 w-9 2xl:h-11 2xl:w-11">
                  <img
                    data-placement="top"
                    title="Brad Pitt"
                    src="assets/images/users/user5-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                    className="tooltip cursor-pointer rounded-full border-[3px] border-white/50"
                  />
                </div>
                <div className="-ml-3 image-fit zoom-in h-9 w-9 2xl:h-11 2xl:w-11">
                  <img
                    data-placement="top"
                    title="Johnny Depp"
                    src="assets/images/users/user7-50x50.jpg"
                    alt="Tailwise - Admin Dashboard Template"
                    className="tooltip cursor-pointer rounded-full border-[3px] border-white/50"
                  />
                </div>
              </div>
              <div className="text-base text-white/70 xl:ml-2 2xl:ml-3">
                Over 300+ strong and growing!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthIntro;
