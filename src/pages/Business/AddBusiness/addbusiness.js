import React from "react";

const AddBusiness = () => {
    return (
        <div className="add-business m-3">
            <div className="flex w-full">
                <div className="w-1/3 border border-bordercolor h-auto">
                    <div className="p-8">

                        <div class="relative z-0 mb-8">
                            <label for="name" class="block mb-7 text-sm font-medium text-textcolor">Company logo</label>
                            <div class="flex justify-center items-center w-full">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-60 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden" />
                                </label>
                            </div>
                        </div>

                        <div class="relative z-0 mb-8">
                            <label for="name" class="block mb-2 text-sm font-medium text-textcolor">Company name</label>
                            <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="Comapny name" />
                        </div>

                        <div class="relative z-0 mb-8">
                            <label for="gst" class="block mb-2 text-sm font-medium text-textcolor">GST number</label>
                            <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="Registered GST number" />
                        </div>

                        <div class="relative z-0 mb-8">
                            <label for="category" class="block mb-2 text-sm font-medium text-textcolor">Category</label>
                            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected>Select</option>
                            </select>
                        </div>

                        <div class="relative z-0 mb-8">
                            <label for="type" class="block mb-2 text-sm font-medium text-textcolor">Type</label>
                            <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                <option selected>Select</option>
                            </select>
                        </div>

                        <div class="relative z-0 mb-8">
                            <label for="sheet" class="block mb-2 text-sm font-medium text-textcolor">Financial sheet (Excel or CSV)</label>
                            <input class="block w-full text-sm  rounded-lg border border-primary p-3 text-primary border-dashed cursor-pointer  focus:outline-none " id="file_input" type="file"></input>
                        </div>

                    </div>
                </div>

                <div className="w-2/3">
                    <div className="flex justify-end">
                        <button type="button" class="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-gray-600  rounded border-0 text-gray-600 font-semibold mx-3"><span>Cancel</span></button>
                        <button type="button" class="ant-btn ant-btn-default bg-primary hover:bg-primary focus:bg-primary hover:text-white rounded border-0 text-white"><span>Save</span></button>
                    </div>
                    <div className="p-8">
                        <div className="financial-details">
                            <h1 className="text-textcolor text-base font-bold mb-4">Financial details</h1>
                            <div className="grid gap-10 grid-cols-2">
                                <div class="relative z-0 mb-8">
                                    <label for="paidup" class="block mb-2 text-sm font-medium text-textcolor">Paidup capital</label>
                                    <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="INR" />
                                </div>

                                <div class="relative z-0 mb-8">
                                    <label for="authorised" class="block mb-2 text-sm font-medium text-textcolor">Authorised capital</label>
                                    <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="INR" />
                                </div>
                            </div>

                            <h1 className="text-textcolor text-base font-bold mb-4">Others</h1>

                            <div className="grid gap-10 grid-cols-2">
                                <div class="relative z-0 mb-8">
                                    <label for="ceo" class="block mb-2 text-sm font-medium text-textcolor">CEO</label>
                                    <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Select</option>
                                    </select>
                                </div>

                                <div class="relative z-0 mb-8">
                                    <label for="employees" class="block mb-2 text-sm font-medium text-textcolor">Number of employees</label>
                                    <input type="number" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="100" />
                                </div>
                            </div>

                            <h1 className="text-textcolor text-base font-bold mb-4">Shareholders</h1>
                            <div className="share-holder">
                                <div className="grid gap-10 grid-cols-3">
                                    <div class="relative z-0 mb-8">
                                        <label for="shareholder" class="block mb-2 text-sm font-medium text-textcolor">Shareholder 1</label>
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select</option>
                                        </select>
                                    </div>

                                    <div class="relative z-0 mb-8">
                                        <label for="shareholder" class="block mb-2 text-sm font-medium text-textcolor">Shareholder 2</label>
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select</option>
                                        </select>
                                    </div>

                                    <div class="relative z-0 mb-8">
                                        <label for="shareholder" class="block mb-2 text-sm font-medium text-textcolor">Shareholder 3</label>
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="add-more mb-8">
                                    <button type="button" class="ant-btn ant-btn-default bg-gray-200 hover:bg-gray-200 focus:bg-gray-200 hover:text-textcolor focus:text-textcolor  rounded border-0 text-textcolor font-normal h-10 w-full"><span><i class="ri-add-line ri-lg align-sub"></i> Add more shareholders</span></button>
                                </div>
                            </div>

                            <h1 className="text-textcolor text-base font-bold mb-4">Address</h1>
                            <div class="relative z-0 mb-8">
                                <label for="address" class="block mb-2 text-sm font-medium text-textcolor">Address line 1</label>
                                <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="Summary" />
                            </div>

                            <div class="relative z-0 mb-8">
                                <label for="address" class="block mb-2 text-sm font-medium text-textcolor">Address line 2</label>
                                <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="Summary" />
                            </div>

                            <div className="grid gap-10 grid-cols-3">
                                <div class="relative z-0 mb-8">
                                    <label for="company" class="block mb-2 text-sm font-medium text-textcolor">Company name</label>
                                    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder="Company name" />
                                </div>

                                <div class="relative z-0 mb-8">
                                    <label for="country" class="block mb-2 text-sm font-medium text-textcolor">Country</label>
                                    <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>India</option>
                                    </select>
                                </div>

                                <div class="relative z-0 mb-8">
                                    <label for="state" class="block mb-2 text-sm font-medium text-textcolor">State</label>
                                    <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                        <option selected>Karnataka</option>
                                    </select>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBusiness;