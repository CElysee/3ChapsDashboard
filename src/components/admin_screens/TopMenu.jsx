import React from 'react'

function TopMenu() {
  return (
    <>
    <div>
        <div
          data-tw-backdrop=""
          aria-hidden="true"
          tabIndex="-1"
          id="theme-switcher"
          className="modal group bg-gradient-to-b from-theme-1/50 via-theme-2/50 to-black/50 transition-[visibility,opacity] w-screen h-screen fixed left-0 top-0 [&:not(.show)]:duration-[0s,0.2s] [&:not(.show)]:delay-[0.2s,0s] [&:not(.show)]:invisible [&:not(.show)]:opacity-0 [&.show]:visible [&.show]:opacity-100 [&.show]:duration-[0s,0.4s]"
        >
          <div
            data-tw-merge=""
            className="ml-auto h-screen flex flex-col bg-white relative shadow-md transition-[margin-right] duration-[0.6s] -mr-[100%] group-[.show]:mr-0 dark:bg-darkmode-600 sm:w-[460px] w-72 rounded-[0.75rem_0_0_0.75rem/1.1rem_0_0_1.1rem]"
          >
            <a
              className="absolute inset-y-0 left-0 right-auto my-auto -ml-[60px] flex h-8 w-8 items-center justify-center rounded-full border border-white/90 bg-white/5 text-white/90 transition-all hover:rotate-180 hover:scale-105 hover:bg-white/10 focus:outline-none sm:-ml-[105px] sm:h-14 sm:w-14"
              data-tw-dismiss="modal"
              
            >
              <i
                data-tw-merge=""
                data-lucide="x"
                className="stroke-[1] h-3 w-3 sm:h-8 sm:w-8"
              ></i>
            </a>
            <div data-tw-merge="" className="overflow-y-auto flex-1 p-0">
              <div className="flex flex-col">
                <div className="px-8 pb-8 pt-6">
                  <div className="text-base font-medium">Templates</div>
                  <div className="mt-0.5 text-slate-500">
                    Choose your templates
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5">
                    <div>
                      <a
                        href="echo-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block border-2 border-theme-1/60"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/echo.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        echo
                      </div>
                    </div>
                    <div>
                      <a
                        href="hurricane-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/hurricane.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        hurricane
                      </div>
                    </div>
                    <div>
                      <a
                        href="ravage-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/ravage.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        ravage
                      </div>
                    </div>
                    <div>
                      <a
                        href="hook-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/hook.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        hook
                      </div>
                    </div>
                    <div>
                      <a
                        href="razor-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/razor.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        razor
                      </div>
                    </div>
                    <div>
                      <a
                        href="havoc-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/havoc.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        havoc
                      </div>
                    </div>
                    <div>
                      <a
                        href="dagger-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/dagger.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        dagger
                      </div>
                    </div>
                    <div>
                      <a
                        href="shuriken-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/shuriken.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        shuriken
                      </div>
                    </div>
                    <div>
                      <a
                        href="raze-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/raze.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        raze
                      </div>
                    </div>
                    <div>
                      <a
                        href="exort-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/exort.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        exort
                      </div>
                    </div>
                    <div>
                      <a
                        href="viper-dashboard-overview-1.html"
                        className="h-28 cursor-pointer bg-slate-50 box p-1 block"
                      >
                        <div className="h-full w-full overflow-hidden rounded-md">
                          <img
                            className="h-full w-full"
                            src="/assets/images/themes/viper.png"
                            alt="Tailwise - Admin Dashboard Template"
                          />
                        </div>
                      </a>
                      <div className="mt-2.5 text-center text-xs capitalize">
                        viper
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-b border-dashed"></div>
                <div className="px-8 pb-8 pt-6">
                  <div className="text-base font-medium">Color Schemes</div>
                  <div className="mt-0.5 text-slate-500">
                    Choose your color schemes
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3.5 sm:grid-cols-4">
                    <div>
                      <a
                        data-theme-color="default"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 default"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 default"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-1"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-1"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-1"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-2"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-2"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-2"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-3"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-3"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-3"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-4"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-4"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-4"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-5"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-5"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-5"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-6"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-6"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-6"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-7"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-7"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-7"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-8"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-8"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-8"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-9"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-9"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-9"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-10"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-10"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-10"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-11"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-11"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-11"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-12"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-12"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-12"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-13"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-13"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-13"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-14"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-14"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-14"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-15"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-15"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-15"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-16"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-16"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-16"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        data-theme-color="theme-17"
                        className="h-12 cursor-pointer bg-slate-50 box rounded-full p-1 border-slate-300/80 block [&.active]:border-2 [&.active]:border-theme-1/60"
                      >
                        <div className="h-full overflow-hidden rounded-full">
                          <div className="-mx-2 flex h-full items-center gap-1">
                            <div className="w-1/2 h-[140%] bg-theme-1 rotate-12 theme-17"></div>
                            <div className="w-1/2 h-[140%] bg-theme-2 rotate-12 theme-17"></div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed bottom-0 right-0 z-50 mb-5 mr-5 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-theme-1 text-white shadow-lg"
          data-tw-toggle="modal"
          data-tw-target="#theme-switcher"
        >
          <i
            data-tw-merge=""
            data-lucide="settings"
            className="stroke-[1] w-5 h-5 animate-spin"
          ></i>
        </div>
      </div>
    </>
  )
}

export default TopMenu