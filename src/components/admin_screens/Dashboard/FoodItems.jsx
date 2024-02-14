import React from "react";
import TopMenu from "../TopMenu";
import SideMenu from "../SideMenu";
import AddNewFoodItem from "./Modals/AddNewFoodItem";

function FoodItems() {
  return (
    <>
      <TopMenu />
      <div className="echo group bg-gradient-to-b from-slate-200/70 to-slate-50 background relative min-h-screen before:content-[''] before:h-[370px] before:w-screen before:bg-gradient-to-t before:from-theme-1/80 before:to-theme-2 [&.background--hidden]:before:opacity-0 before:transition-[opacity,height] before:ease-in-out before:duration-300 before:top-0 before:fixed after:content-[''] after:h-[370px] after:w-screen [&.background--hidden]:after:opacity-0 after:transition-[opacity,height] after:ease-in-out after:duration-300 after:top-0 after:fixed after:bg-texture-white after:bg-contain after:bg-fixed after:bg-[center_-13rem] after:bg-no-repeat">
        <SideMenu />
        <div className="content transition-[margin,width] duration-100 xl:pl-3.5 pt-[54px] pb-16 relative z-10 group mode xl:ml-[275px] [&.content--compact]:xl:ml-[91px] mode--light">
          <div className="mt-16 px-5">
            <div className="container">
              <div className="grid grid-cols-12 gap-x-6 gap-y-10">
                <div className="col-span-12">
                  <div className="flex flex-col gap-y-3 md:h-10 md:flex-row md:items-center">
                    <div className="text-base font-medium group-[.mode--light]:text-white">
                      Food Items
                    </div>
                    <div className="flex flex-col gap-x-3 gap-y-2 sm:flex-row md:ml-auto">
                     <AddNewFoodItem />
                    </div>
                  </div>
                  <div className="mt-3.5 flex flex-col gap-8">
                    <div className="box box--stacked flex flex-col p-5">
                      <div className="grid grid-cols-4 gap-5">
                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                          <div className="text-base text-slate-500">
                            Registered Items
                          </div>
                          <div className="mt-1.5 text-2xl font-medium">
                            457,204
                          </div>
                          <div className="absolute inset-y-0 right-0 mr-5 flex flex-col justify-center">
                            <div className="flex items-center rounded-full border border-danger/10 bg-danger/10 py-[2px] pl-[7px] pr-1 text-xs font-medium text-danger">
                              3%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-down"
                                className="ml-px h-4 w-4 stroke-[1.5]"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                          <div className="text-base text-slate-500">
                            Active Items
                          </div>
                          <div className="mt-1.5 text-2xl font-medium">
                            122,721
                          </div>
                          <div className="absolute inset-y-0 right-0 mr-5 flex flex-col justify-center">
                            <div className="flex items-center rounded-full border border-success/10 bg-success/10 py-[2px] pl-[7px] pr-1 text-xs font-medium text-success">
                              2%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-up"
                                className="ml-px h-4 w-4 stroke-[1.5]"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                          <div className="text-base text-slate-500">
                            Most Popular
                          </div>
                          <div className="font-mediumm mt-1.5 text-2xl">
                            489,223
                          </div>
                          <div className="absolute inset-y-0 right-0 mr-5 flex flex-col justify-center">
                            <div className="flex items-center rounded-full border border-danger/10 bg-danger/10 py-[2px] pl-[7px] pr-1 text-xs font-medium text-danger">
                              3%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-down"
                                className="ml-px h-4 w-4 stroke-[1.5]"
                              ></i>
                            </div>
                          </div>
                        </div>
                        <div className="box col-span-4 rounded-[0.6rem] border border-dashed border-slate-300/80 p-5 shadow-sm md:col-span-2 xl:col-span-1">
                          <div className="text-base text-slate-500">
                            Less Popular
                          </div>
                          <div className="font-mediumm mt-1.5 text-2xl">
                            411,259
                          </div>
                          <div className="absolute inset-y-0 right-0 mr-5 flex flex-col justify-center">
                            <div className="flex items-center rounded-full border border-success/10 bg-success/10 py-[2px] pl-[7px] pr-1 text-xs font-medium text-success">
                              8%
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-up"
                                className="ml-px h-4 w-4 stroke-[1.5]"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box box--stacked flex flex-col">
                      <div className="flex flex-col gap-y-2 p-5 sm:flex-row sm:items-center">
                        <div>
                          <div className="relative">
                            <i
                              data-tw-merge=""
                              data-lucide="search"
                              className="absolute inset-y-0 left-0 z-10 my-auto ml-3 h-4 w-4 stroke-[1.3] text-slate-500"
                            ></i>
                            <input
                              data-tw-merge=""
                              type="text"
                              placeholder="Search users..."
                              className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 rounded-[0.5rem] pl-9 sm:w-64"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-x-3 gap-y-2 sm:ml-auto sm:flex-row">
                          <div
                            data-tw-merge=""
                            data-tw-placement="bottom-end"
                            className="dropdown relative"
                          >
                            <button
                              data-tw-merge=""
                              data-tw-toggle="dropdown"
                              aria-expanded="false"
                              className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-full sm:w-auto"
                            >
                              <i
                                data-tw-merge=""
                                data-lucide="download"
                                className="mr-2 h-4 w-4 stroke-[1.3]"
                              ></i>
                              Export
                              <i
                                data-tw-merge=""
                                data-lucide="chevron-down"
                                className="ml-2 h-4 w-4 stroke-[1.3]"
                              ></i>
                            </button>
                            <div
                              data-transition=""
                              data-selector=".show"
                              data-enter="transition-all ease-linear duration-150"
                              data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                              data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                              data-leave="transition-all ease-linear duration-150"
                              data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                              data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                              className="dropdown-menu absolute z-[9999] hidden"
                            >
                              <div
                                data-tw-merge=""
                                className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                              >
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="file-bar-chart"
                                    className="stroke-[1] mr-2 h-4 w-4"
                                  ></i>
                                  PDF
                                </a>
                                <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="file-bar-chart"
                                    className="stroke-[1] mr-2 h-4 w-4"
                                  ></i>
                                  CSV
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            data-tw-merge=""
                            data-tw-placement="bottom-end"
                            className="dropdown relative inline-block"
                          >
                            <button
                              data-tw-merge=""
                              data-tw-toggle="dropdown"
                              aria-expanded="false"
                              className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed border-secondary text-slate-500 dark:border-darkmode-100/40 dark:text-slate-300 [&:hover:not(:disabled)]:bg-secondary/20 [&:hover:not(:disabled)]:dark:bg-darkmode-100/10 w-full sm:w-auto"
                            >
                              <i
                                data-tw-merge=""
                                data-lucide="arrow-down-wide-narrow"
                                className="mr-2 h-4 w-4 stroke-[1.3]"
                              ></i>
                              Filter
                            </button>
                            <div
                              data-transition=""
                              data-selector=".show"
                              data-enter="transition-all ease-linear duration-150"
                              data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                              data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                              data-leave="transition-all ease-linear duration-150"
                              data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                              data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                              className="dropdown-menu absolute z-[9999] hidden"
                            >
                              <div
                                data-tw-merge=""
                                className="mt-3 dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600"
                              >
                                <div className="p-2">
                                  <div>
                                    <div className="text-left text-slate-500">
                                      Category
                                    </div>
                                    <select
                                      data-tw-merge=""
                                      className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1"
                                    >
                                      <option value="Support Specialist">
                                        Active
                                      </option>
                                      <option value="Marketing Coordinator">
                                        Inactive
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mt-3">
                                    <div className="text-left text-slate-500">
                                      Item type
                                    </div>
                                    <select
                                      data-tw-merge=""
                                      className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1"
                                    >
                                      <option value="Support Specialist">
                                        Veg
                                      </option>
                                      <option value="Marketing Coordinator">
                                        Non Veg
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mt-3">
                                    <div className="text-left text-slate-500">
                                      IsFeatured
                                    </div>
                                    <select
                                      data-tw-merge=""
                                      className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1"
                                    >
                                      <option value="Support Specialist">
                                        Yes
                                      </option>
                                      <option value="Marketing Coordinator">
                                        No
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mt-3">
                                    <div className="text-left text-slate-500">
                                      Status
                                    </div>
                                    <select
                                      data-tw-merge=""
                                      className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 mt-2 flex-1"
                                    >
                                      <option value="Support Specialist">
                                        Active
                                      </option>
                                      <option value="Marketing Coordinator">
                                        Inactive
                                      </option>
                                    </select>
                                  </div>
                                  <div className="mt-4 flex items-center">
                                    <button
                                      data-tw-merge=""
                                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-secondary/70 border-secondary/70 text-slate-500 dark:border-darkmode-400 dark:bg-darkmode-400 dark:text-slate-300 [&:hover:not(:disabled)]:bg-slate-100 [&:hover:not(:disabled)]:border-slate-100 [&:hover:not(:disabled)]:dark:border-darkmode-300/80 [&:hover:not(:disabled)]:dark:bg-darkmode-300/80 ml-auto w-32"
                                    >
                                      Close
                                    </button>
                                    <button
                                      data-tw-merge=""
                                      className="transition duration-200 border shadow-sm inline-flex items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed bg-primary border-primary text-white dark:border-primary ml-2 w-32"
                                    >
                                      Apply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-auto">
                        <table
                          data-tw-merge=""
                          className="w-full text-left border-b border-slate-200/60"
                        >
                          <thead data-tw-merge="" className="">
                            <tr data-tw-merge="" className="">
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-5 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Name
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Category
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Ingredients
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Price
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                IsFeatured
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Description
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500"
                              >
                                Status
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-t border-slate-200/60 bg-slate-50 py-4 font-medium text-slate-500"
                              >
                                Date Created
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-20 border-t border-slate-200/60 bg-slate-50 py-4 text-center font-medium text-slate-500"
                              >
                                Action
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Leonardo DiCaprio"
                                      src="/assets/images/users/user3-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Leonardo DiCaprio
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      leonardo.dicaprio@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Support Specialist
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Support Team
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-success">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  May 5, 2018
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Meryl Streep"
                                      src="/assets/images/users/user2-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Meryl Streep
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      meryl.streep@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Marketing Coordinator
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Marketing Department
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-success">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  March 22, 2015
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Tom Hanks"
                                      src="/assets/images/users/user1-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Tom Hanks
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      tom.hanks@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Sales Manager
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Sales Department
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  January 15, 2010
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Julia Roberts"
                                      src="/assets/images/users/user10-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Julia Roberts
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      julia.roberts@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Software Engineer
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Engineering
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  August 9, 2014
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Cate Blanchett"
                                      src="/assets/images/users/user8-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Cate Blanchett
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      cate.blanchett@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Project Manager
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Project Management
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  June 12, 2017
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Brad Pitt"
                                      src="/assets/images/users/user5-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Brad Pitt
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      brad.pitt@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Data Analyst
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Data Analytics
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  September 3, 2016
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Denzel Washington"
                                      src="/assets/images/users/user9-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Denzel Washington
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      denzel.washington@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  HR Director
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Human Resources
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  April 25, 2011
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Angelina Jolie"
                                      src="/assets/images/users/user4-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Angelina Jolie
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      angelina.jolie@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Account Executive
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Account Management
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Active
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  July 10, 2012
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Jennifer Lawrence"
                                      src="/assets/images/users/user6-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Jennifer Lawrence
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      jennifer.lawrence@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  CRM Administrator
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  CRM Team
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-danger">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  February 18, 2019
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr
                              data-tw-merge=""
                              className="[&_td]:last:border-b-0"
                            >
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <input
                                  data-tw-merge=""
                                  type="checkbox"
                                  className="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50"
                                />
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 w-80 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center">
                                  <div className="image-fit zoom-in h-9 w-9">
                                    <img
                                      data-placement="top"
                                      title="Johnny Depp"
                                      src="/assets/images/users/user7-50x50.jpg"
                                      alt="Tailwise - Admin Dashboard Template"
                                      className="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                    />
                                  </div>
                                  <div className="ml-3.5">
                                    <a
                                      className="whitespace-nowrap font-medium"
                                      href=""
                                    >
                                      Johnny Depp
                                    </a>
                                    <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                      johnny.depp@left4code.com
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <a
                                  className="whitespace-nowrap font-medium"
                                  href=""
                                >
                                  Product Manager
                                </a>
                                <div className="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                  Product Management
                                </div>
                              </td>

                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center text-success">
                                  <i
                                    data-tw-merge=""
                                    data-lucide="database"
                                    className="h-3.5 w-3.5 stroke-[1.7]"
                                  ></i>
                                  <div className="ml-1.5 whitespace-nowrap">
                                    Inactive
                                  </div>
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="whitespace-nowrap">
                                  October 7, 2013
                                </div>
                              </td>
                              <td
                                data-tw-merge=""
                                className="px-5 border-b dark:border-darkmode-300 relative border-dashed py-4 dark:bg-darkmode-600"
                              >
                                <div className="flex items-center justify-center">
                                  <div
                                    data-tw-merge=""
                                    data-tw-placement="bottom-end"
                                    className="dropdown relative h-5"
                                  >
                                    <button
                                      data-tw-toggle="dropdown"
                                      aria-expanded="false"
                                      className="cursor-pointer h-5 w-5 text-slate-500"
                                    >
                                      <i
                                        data-tw-merge=""
                                        data-lucide="more-vertical"
                                        className="stroke-[1] w-5 h-5 fill-slate-400/70 stroke-slate-400/70"
                                      ></i>
                                    </button>
                                    <div
                                      data-transition=""
                                      data-selector=".show"
                                      data-enter="transition-all ease-linear duration-150"
                                      data-enter-from="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      data-enter-to="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave="transition-all ease-linear duration-150"
                                      data-leave-from="!mt-1 visible opacity-100 translate-y-0"
                                      data-leave-to="absolute !mt-5 invisible opacity-0 translate-y-1"
                                      className="dropdown-menu absolute z-[9999] hidden"
                                    >
                                      <div
                                        data-tw-merge=""
                                        className="dropdown-content rounded-md border-transparent bg-white p-2 shadow-[0px_3px_10px_#00000017] dark:border-transparent dark:bg-darkmode-600 w-40"
                                      >
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="check-square"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Edit
                                        </a>
                                        <a className="cursor-pointer flex items-center p-2 transition duration-300 ease-in-out rounded-md hover:bg-slate-200/60 dark:bg-darkmode-600 dark:hover:bg-darkmode-400 dropdown-item text-danger">
                                          <i
                                            data-tw-merge=""
                                            data-lucide="trash2"
                                            className="stroke-[1] mr-2 h-4 w-4"
                                          ></i>
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="flex-reverse flex flex-col-reverse flex-wrap items-center gap-y-2 p-5 sm:flex-row">
                        <nav className="mr-auto w-full flex-1 sm:w-auto">
                          <ul className="flex w-full mr-0 sm:mr-auto sm:w-auto">
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevrons-left"
                                  className="stroke-[1] h-4 w-4"
                                ></i>
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-left"
                                  className="stroke-[1] h-4 w-4"
                                ></i>
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                ...
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                1
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400"
                              >
                                2
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                3
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                ...
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevron-right"
                                  className="stroke-[1] h-4 w-4"
                                ></i>
                              </a>
                            </li>
                            <li className="flex-1 sm:flex-initial">
                              <a
                                data-tw-merge=""
                                className="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"
                              >
                                <i
                                  data-tw-merge=""
                                  data-lucide="chevrons-right"
                                  className="stroke-[1] h-4 w-4"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <select
                          data-tw-merge=""
                          className="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 rounded-[0.5rem] sm:w-20"
                        >
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItems;
