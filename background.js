chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {redirectUrl: "https://cms.mmu.edu.my/psp/csprd/EMPLOYEE/HRMS/h/?tab=DEFAULT"};
    },
    {
        urls: [
            "*://cms.mmu.edu.my/",
        ],
        types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
    },
    ["blocking"]
);