$.ajax({
    type:"GET",
    url:"data/bikeshare.json",
    dataType:"json",
    success:onLoadBikeshare,
    error:function(){alert("error reading json");}
});

function onLoadBikeshare(json)
{
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

    $("#percent-bikes-num").text(((availableDocks / totalDocks) * 100).toFixed() + "%");
    $("#total-docks-num").text(totalDocks);
}
