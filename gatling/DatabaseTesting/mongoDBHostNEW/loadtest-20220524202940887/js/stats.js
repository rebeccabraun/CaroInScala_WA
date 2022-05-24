var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3115",
        "ok": "3115",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1884",
        "ok": "1884",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1123",
        "ok": "1123",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1899",
        "ok": "1899",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2996",
        "ok": "2996",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3106",
        "ok": "3106",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3113",
        "ok": "3113",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 25
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 25
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.25",
        "ok": "1.25",
        "ko": "-"
    }
},
contents: {
"req_load-ec4d1": {
        type: "REQUEST",
        name: "load",
path: "load",
pathFormatted: "req_load-ec4d1",
stats: {
    "name": "load",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2882",
        "ok": "2882",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "3115",
        "ok": "3115",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "3000",
        "ok": "3000",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "95",
        "ok": "95",
        "ko": "-"
    },
    "percentiles1": {
        "total": "3009",
        "ok": "3009",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3099",
        "ok": "3099",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3111",
        "ok": "3111",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3114",
        "ok": "3114",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "0.625",
        "ko": "-"
    }
}
    },"req_save-43781": {
        type: "REQUEST",
        name: "save",
path: "save",
pathFormatted: "req_save-43781",
stats: {
    "name": "save",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "365",
        "ok": "365",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "915",
        "ok": "915",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "148",
        "ok": "148",
        "ko": "-"
    },
    "percentiles1": {
        "total": "803",
        "ok": "803",
        "ko": "-"
    },
    "percentiles2": {
        "total": "852",
        "ok": "852",
        "ko": "-"
    },
    "percentiles3": {
        "total": "892",
        "ok": "892",
        "ko": "-"
    },
    "percentiles4": {
        "total": "910",
        "ok": "910",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 50
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.625",
        "ok": "0.625",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
