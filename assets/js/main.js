$.ajax({
    type:"GET",
    url:"/assets/json/bikeshare.json",
    dataType:"json",
    success:function(json){
        var bikeStations = json.stationBeanList;
        var numStations = bikeStations.length;
        var totalDocks = 0;
        var availableDocks = 0;

        for(var i = 0; i < numStations; ++i)
        {
            var station = bikeStations[i];
            totalDocks += station.totalDocks;
            availableDocks += station.availableDocks;
        }

        $(".percent-bikes .statistic").text(((availableDocks / totalDocks) * 100).toFixed() + "%");
        $(".total-docks .statistic").text(totalDocks);
        $(".num-locations .statistic").text(numStations);

    },
    error:function(){alert("Error with ajax request.");}
});
