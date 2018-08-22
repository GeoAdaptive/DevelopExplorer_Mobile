// var map = L.map('map-selpage', {
//   // center: [-23.617, -56.981],
//   center: [-10.604, -58.768],
//   zoom: 4
// });
//
// var lightmap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png', {
//   maxZoom: 18,
//   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
//   subdomains: 'abcd'
// });
//
// map.addLayer(lightmap);

//scrapping section
// var scrape = 'http://www.mag.gov.py/index.php/geoportal/infraestructuras';
// $(document).ready(function(){
//   $.ajax(scrape).done(function(data) {
//     var parsedData000 = JSON.parse(data);
//     console.log(parsedData000);
//   })
// });

//reference from only polygons example
// here this example
var myGeoJSONPath = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/3e3b23b8c15806ba3e1f7cc9879b9b51bcf8a152/data/LatinAmerica.geo.json';
var ParaguayNationUrl = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/3e3b23b8c15806ba3e1f7cc9879b9b51bcf8a152/data/Paraguay_m.geo.json';
var ParaguayNation = [];

var tophighlightStyle = {
    color: '#ffffff',
    weight: 1,
    opacity: 1,
    // stroke: false,
    fill: true,
    // fillColor: '#AED6F1',
    fillColor: '#FA8258',
    fillOpacity: 1
};

var myCustomStyle = {
    color: '#ffffff',
    weight: 1,
    opacity: 1,
    // stroke: false,
    fill: true,
    // fillColor: '#AED6F1',
    fillColor: '#D4E6F1',
    fillOpacity: 1
};

var highlightStyle = {
    color: '#F5sB041',
    weight: 3,
    opacity: 1,
    fillOpacity: 1,
    fillColor: '#F5B041'
};

var clickStyle = {
  color: '#F5B041',
  weight: 3,
  opacity: 1,
  fillOpacity: 1,
  fillColor: '#F5B041'
};

var pastclickStyle = {
    color: '#ffffff',
    weight: 1,
    opacity: 1,
    // stroke: false,
    fill: true,
    fillOpacity: 0.6,
    fillColor: '#D7DBDD'
};

// var map = L.map('map-mappage', {
//   center: [-23.414, -57.384],
//   zoom: 7,
//   minZoom: 6,
//   maxZoom: 9
// });

var AP_boundaryurl = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/master/data/adm_alto_parana_dgeec_2012_pry.geojson';
var parsedData_AP;
var AP_boundary = [];

var OP_boundaryurl = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/master/data/adm_oeste_paranaense_ibge_2015_bra.geojson';
var parsedData_OP;
var OP_boundary = [];
var OP_boundary1 = [];


var APStyle = {
    color: '#ffffff',
    weight:0.8,
    opacity: 0.8,
    fillOpacity: 0.8,
    fillColor: '#FAAC58'
};

var OPStyle = {
    color: '#ffffff',
    weight:0.8,
    opacity: 0.8,
    fillOpacity: 0.8,
    fillColor: '#FAAC58'
};


//The Optimize
var Hondurasurl = 'https://raw.githubusercontent.com/GeoAdaptive/DevelopmentExplorer/master/data/Honduras.geojson';
var Guatemalaurl = 'https://raw.githubusercontent.com/GeoAdaptive/DevelopmentExplorer/master/data/Guatemala_1.geojson';
var Salvadorurl = 'https://raw.githubusercontent.com/GeoAdaptive/DevelopmentExplorer/master/data/SalVardo.geojson';
var Haitiurl = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/master/data/hti_adm0_3.geojson';
var DomiRepurl = 'https://raw.githubusercontent.com/GeoAdaptive/DE_V3/master/data/dom_adm0.geojson';

var parsedData_HON;
var parsedData_GUA;
var parsedData_SLV;
var parsedData_HAT;
var parsedData_DOM;

Honduras = [];
Guatemala = [];
Salvador = [];
Haiti = [];
Dominican = [];


$(document).ready(function(){
  $.ajax(Haitiurl).done(function(data){
    parsedData_HAT = JSON.parse(data);
    console.log(parsedData_HAT);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_HAT,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + feature.properties.nm_municip + "</b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td>" + (feature.properties.shape_area / 1000000 ).toFixed(3) + "</td>"+ "</tr>" +
          // "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);
          //
          // layer.bindTooltip(tooltip);

          layer.on('click', function (event) {
            // map1.fitBounds(layer.getBounds(),{
            //            padding: [80,80]
            //          });
            map2.fitBounds(layer.getBounds(),{
                      padding: [80,80]
                     });
            // map3.fitBounds(layer.getBounds(),{
            //           padding: [80,80]
            //          });

            layer.setStyle(clickStyle);
            // _.each(ParaguayNation,function(layer){
            //   map.addLayer(layer);
            // });
            // _.each(layerMappedPolygons,function(layer){
              // map1.removeLayer(layerMappedPolygons);
              map2.removeLayer(layerMappedPolygons);
              // map3.removeLayer(layerMappedPolygons);
            // });

            layer.on('mouseout', function(e){
              layer.setStyle(pastclickStyle);
            });
            // layer.bindPopup(
            //   "<b>Name: </b>" +
            //     feature.properties.admin +
            //     "</br>"
            // );
          });

          }
        }).addTo(map2);
        defaultboundary.eachLayer(eachFeatureFunction);

        Haiti.push(defaultboundary);
        console.log("Haiti nation boundary generated.");
  })
})


$(document).ready(function(){
  $.ajax(DomiRepurl).done(function(data){
    parsedData_DOM = JSON.parse(data);
    console.log(parsedData_DOM);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_DOM,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + feature.properties.nm_municip + "</b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td>" + (feature.properties.shape_area / 1000000 ).toFixed(3) + "</td>"+ "</tr>" +
          // "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);
          //
          // layer.bindTooltip(tooltip);

          layer.on('click', function (event) {
            // map1.fitBounds(layer.getBounds(),{
            //            padding: [80,80]
            //          });
            map2.fitBounds(layer.getBounds(),{
                      padding: [80,80]
                     });
            // map3.fitBounds(layer.getBounds(),{
            //           padding: [80,80]
            //          });

            layer.setStyle(clickStyle);
            // _.each(ParaguayNation,function(layer){
            //   map.addLayer(layer);
            // });
            // _.each(layerMappedPolygons,function(layer){
              // map1.removeLayer(layerMappedPolygons);
              map2.removeLayer(layerMappedPolygons);
              // map3.removeLayer(layerMappedPolygons);
            // });

            layer.on('mouseout', function(e){
              layer.setStyle(pastclickStyle);
            });
            // layer.bindPopup(
            //   "<b>Name: </b>" +
            //     feature.properties.admin +
            //     "</br>"
            // );
          });

          }
        }).addTo(map2);
        defaultboundary.eachLayer(eachFeatureFunction);

        Dominican.push(defaultboundary);
        console.log("Dominican nation boundary generated.");
  })
})



$(document).ready(function(){
  $.ajax(Hondurasurl).done(function(data){
    parsedData_HON = JSON.parse(data);
    console.log(parsedData_HON);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_HON,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + feature.properties.nm_municip + "</b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td>" + (feature.properties.shape_area / 1000000 ).toFixed(3) + "</td>"+ "</tr>" +
          // "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);
          //
          // layer.bindTooltip(tooltip);

          layer.on('click', function (event) {
            // map1.fitBounds(layer.getBounds(),{
            //            padding: [80,80]
            //          });
            // map2.fitBounds(layer.getBounds(),{
            //           padding: [80,80]
            //          });
            map3.fitBounds(layer.getBounds(),{
                      padding: [80,80]
                     });

            layer.setStyle(clickStyle);
            // _.each(ParaguayNation,function(layer){
            //   map.addLayer(layer);
            // });
            // _.each(layerMappedPolygons,function(layer){
              // map1.removeLayer(layerMappedPolygons);
              // map2.removeLayer(layerMappedPolygons);
              map3.removeLayer(layerMappedPolygons);
            // });

            layer.on('mouseout', function(e){
              layer.setStyle(pastclickStyle);
            });
            // layer.bindPopup(
            //   "<b>Name: </b>" +
            //     feature.properties.admin +
            //     "</br>"
            // );
          });


          }
        }).addTo(map3);
        defaultboundary.eachLayer(eachFeatureFunction);

        Honduras.push(defaultboundary);
        console.log("Honduras nation boundary generated.");
  })
})

$(document).ready(function(){
  $.ajax(Guatemalaurl).done(function(data){
    parsedData_GUA = JSON.parse(data);
    console.log(parsedData_GUA);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_GUA,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + feature.properties.nm_municip + "</b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td>" + (feature.properties.shape_area / 1000000 ).toFixed(3) + "</td>"+ "</tr>" +
          // "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);
          //
          // layer.bindTooltip(tooltip);

          layer.on('click', function (event) {
            map.fitBounds(layer.getBounds(),{
                       padding: [30,30]
                     });
            layer.setStyle(clickStyle);
            _.each(ParaguayNation,function(layer){
              map.addLayer(layer);
            });
            // _.each(layerMappedPolygons,function(layer){
              map.removeLayer(layerMappedPolygons);
            // });

            layer.on('mouseout', function(e){
              layer.setStyle(pastclickStyle);
            });
            // layer.bindPopup(
            //   "<b>Name: </b>" +
            //     feature.properties.admin +
            //     "</br>"
            // );
          });
          }
        }).addTo(map3);
        defaultboundary.eachLayer(eachFeatureFunction);

        Guatemala.push(defaultboundary);
        console.log("Guatemala boundary generated.");
  })
})


$(document).ready(function(){
  $.ajax(Salvadorurl).done(function(data){
    parsedData_SLV = JSON.parse(data);
    console.log(parsedData_SLV);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_SLV,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + feature.properties.nm_municip + "</b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td>" + (feature.properties.shape_area / 1000000 ).toFixed(3) + "</td>"+ "</tr>" +
          // "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);
          //
          // layer.bindTooltip(tooltip);


          layer.on('click', function (event) {
            map.fitBounds(layer.getBounds(),{
                       padding: [30,30]
                     });
            layer.setStyle(clickStyle);
            _.each(ParaguayNation,function(layer){
              map.addLayer(layer);
            });
            // _.each(layerMappedPolygons,function(layer){
              map.removeLayer(layerMappedPolygons);
            // });

            layer.on('mouseout', function(e){
              layer.setStyle(pastclickStyle);
            });
            // layer.bindPopup(
            //   "<b>Name: </b>" +
            //     feature.properties.admin +
            //     "</br>"
            // );
          });


          }
        }).addTo(map3);
        defaultboundary.eachLayer(eachFeatureFunction);

        Salvador.push(defaultboundary);
        console.log("Salvador boundary generated.");
  })
})

var eachFeatureFunction = function(layer){
  // layer.on('mouseover', function() { layer.setStyle(mouseoverstyle);});
  // layer.on('mouseout', function() { layer.setStyle(mouseoutstyle);});
  //REFERENCE ON AZAVEA NEXTCITY PROJECT
  // label = ("<div id='text'>" +
  // "<div id='name'>" + layer.feature.properties.Neighborho + "</div>" +
  // " is " + "<b>" + "<span id='category'>" + '<style>#category{background-color:' + layer.feature.properties.color + '; padding: 5px;}</style>' + layer.feature.properties.category + "</b>" + "</span>" + "</div>" +
  //  "<br>" + "<table style='width:100%'>" + "<tr>" + "<td>Crime Index</td>" + "<td>"+layer.feature.properties.CrimeScore + "</td>" + "</tr>" +
  //  "<tr>" + "<td>Median HH Income Index</td>" + "<td>" + layer.feature.properties.MHIScore + "</td>" + "</tr>" +
  //  "<tr>" + "<td>Population Index</td>" + "<td>"+layer.feature.properties.PopScore + "</td>" + "</tr>" +
  //  "<tr>" + "<td>Poverty Index</td>" + "<td>"+layer.feature.properties.PovScore + "</td>"+ "</tr>" +
  //  "<tr>" + "<td>Home Price Index</td>" + "<td>"+layer.feature.properties.MHSScore + "</td>"+ "</tr>" + "</table>");

    layer.on('click', function (event){
      // console.log(layer.feature.properties.poverty);
      map.fitBounds(layer.getBounds(),{
               padding: [30,30]
            });

      _.each(transGapCoverage,function(layer){
            layer.setStyle(gapCoverageStyle);
      });
      _.each(transGapOutcome,function(layer){
            layer.setStyle(gapOutcomeStyle);
      });
      _.each(transGapQuality,function(layer){
            layer.setStyle(gapQualityStyle);
      });

      _.each(Muni_boundary,function(layer){
          layer.setStyle(myStyle_dist);
      });

      _.each(Department_boundary,function(layer){
          layer.setStyle(myStyle_dist);
      });

      console.log("highlighted passed");
      layer.setStyle(extrahighlightStyle);

    });

    // layer.on('click', function (event) {
    //   map.fitBounds(layer.getBounds(),{
    //              padding: [100,180]
    //            });
    //   layer.setStyle(clickStyle);
    //   layer.on('mouseout', function(e){
    //     layer.setStyle(pastclickStyle);
    //   });
    // });

    //DEFINE THE USER QUERY INPUT!
    // $('#search').click(function(){
    //   povlow = $('#input1l').val();
    //   povhigh = $('#input1h').val();
    //   schllow = $('#input2l').val();
    //   schlhigh = $('#input2h').val();
    //   console.log("You selected the poverty range from "+ povlow +"% to " + povhigh +"%.");
    //   console.log("You selected the school density range from "+ schllow +" schools to " + schlhigh +"schools per 10,000 people.");
    //
    //   var pov = layer.feature.properties.poverty;
    //   console.log(layer.feature.properties.poverty);
    //
    //   var schld = layer.feature.properties.schl_perca;
    //   console.log(layer.feature.properties.schl_perca);
    //
    //   if((pov >= povlow) && (pov <= povhigh) && (schld >= schllow) && (schld <= schlhigh)){
    //     console.log(layer);
    //   } else {
    //     map.removeLayer(layer);
    //   }
    // });

};


var map1 = L.map('map-selpage1',{minZoom: 5, maxZoom: 7, zoomControl:false, attributionControl:false, disableScrollWheelZoom: true})
map1.setView([-25.008071, -54.604688], 7);

var map2 = L.map('map-selpage2',{minZoom: 5, maxZoom: 7, zoomControl:false, attributionControl:false, disableScrollWheelZoom: true})
map2.setView([18.922222, -71.838588], 6);

var map3 = L.map('map-selpage3',{minZoom: 5, maxZoom: 7, zoomControl:false, attributionControl:false, disableScrollWheelZoom: true})
map3.setView([14.945709, -92.471737], 6);


//Alto Parana DATA
$(document).ready(function(){
  $.ajax(AP_boundaryurl).done(function(data){
    parsedData_AP = JSON.parse(data);
    console.log(parsedData_AP);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_AP,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          layer.on('click', function (event) {
            map.fitBounds(layer.getBounds(),{
                       padding: [80,80]
                     });
            layer.setStyle(clickStyle);
          });
        //   layer.bindPopup(
        //     "<b>Name: </b>" +
        //     "Alto Paraná </br>" +
        //     "</br><button class='btn btn-light my-2 my-sm-0' style='font-size:12px;' onclick='tableToPDF1()';return true;'>Download Report</button>"
        //   )

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + "Alto Paraná </b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td> 14,212.283 </td>"+ "</tr>" +
          // // "<tr>" + "<td>Population (2002): </td>" + "<td>"+ feature.properties.Cen_2002.toFixed(0) + "</td>" + "</tr>" +
          // "<tr>" + "<td>Population: </td>" + "<td> 773303 </td>" + "</tr>" +
          // "<tr>" + "<td>Pop density: </td>" + "<td> 54.411 per sq km</td>" + "</tr>"
          // // "<tr>" + "<td>Population Change (2002 - 2015)</td>" + "<td>"+ feature.properties.Perce_chan.toFixed(3) + "</td>" + "</tr>" +
          // // "<tr>" + "<td>Population Index</td>" + "<td>" + feature.properties.popdensity + "</td>" + "</tr>" +
          // + "</table></div>");
          //
          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);

          // layer.bindTooltip(tooltip);

          }
        }).addTo(map1);
        defaultboundary.eachLayer(eachFeatureFunction);
        AP_boundary.push(defaultboundary);
        console.log("Alto Parana boundary generated.");
  })
})

//OESTE PARANAENSE DATA
$(document).ready(function(){
  $.ajax(OP_boundaryurl).done(function(data){
    parsedData_OP = JSON.parse(data);
    console.log(parsedData_OP);
    console.log("parsed");

    //SET THE DEFAULT COUNTRY MAP FIRST
    var defaultboundary = L.geoJson(parsedData_OP,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        onEachFeature: function(feature,layer){

          // label = ("<div id='text'>" +
          // "<div id='name'> District Name: " +
          // "</div>" +
          // "<b>" +
          // "<span id='category'>" + '<style>#category{color:#fff; font-weight:bold; background-color:#2E86C1; padding: 5px;}</style>' + "Oeste Paranaense </b>" + "</span>" + "</div>" +
          // "<br>" + "<table style='width:100%'>" +
          // "<tr>" + "<td>Total area: </td>" + "<td> 22,863.833 </td>"+ "</tr>" +
          // // "<tr>" + "<td>Population (2002): </td>" + "<td>"+ feature.properties.Cen_2002.toFixed(0) + "</td>" + "</tr>" +
          // "<tr>" + "<td>Population: </td>" + "<td> 1306164 </td>" + "</tr>" +
          // "<tr>" + "<td>Pop density: </td>" + "<td> 57.13 per sq km</td>" + "</tr>"
          // // "<tr>" + "<td>Population Change (2002 - 2015)</td>" + "<td>"+ feature.properties.Perce_chan.toFixed(3) + "</td>" + "</tr>" +
          // // "<tr>" + "<td>Population Index</td>" + "<td>" + feature.properties.popdensity + "</td>" + "</tr>" +
          // + "</table></div>");

          // tooltip = L.tooltip({
          //   opacity:0.85,
          //   sticky:true,
          //   wrapScreen:true,
          //   noWrap:false,
          // })
          //   .setContent(label);

          // layer.bindTooltip(tooltip);
          }
        }).addTo(map1);
        defaultboundary.eachLayer(eachFeatureFunction);
        OP_boundary.push(defaultboundary);
        console.log("Oeste Paranaense boundary generated.");
  })
})



    // $(document).ready(function(){
    //   $.ajax(myGeoJSONPath).done(function(data) {
    //     var parsedData00 = JSON.parse(data);
    //     console.log(parsedData00);
    //     console.log("parsed00");
    //     var layerMappedPolygons = L.geoJson(parsedData00,
    //       {
    //         style: myCustomStyle,
    //         pointToLayer: function (feature, latlng) {
    //           return new L.Polygon(latlng, {
    //           });
    //         },
    //
    //         onEachFeature: function(feature,layer){
    //
    //           if (layer.feature.properties.name_long == "Dominican Republic" ||
    //               layer.feature.properties.name_long == "Haiti" ||
    //               layer.feature.properties.name_long == "Paraguay" ||
    //               layer.feature.properties.name_long == "Brazil" ||
    //               layer.feature.properties.name_long == "Honduras" ||
    //               layer.feature.properties.name_long == "El Salvador" ||
    //               layer.feature.properties.name_long == "Guatemala" ||
    //               layer.feature.properties.name_long == "Nicaragua"
    //             )
    //           {
    //             layer.setStyle(myCustomStyle);
    //           } else {
    //
    //           }
    //           // layer.bindPopup(
    //           //   "<b>Name: </b>" +
    //           //   feature.properties.admin +
    //           //   "</br>"
    //           //
    //           //   "<b>GDP: </b>" +
    //           //   feature.properties.gdp_md_est +
    //           //   "</br>" +
    //           //
    //           //   "<b>Population: </b>" +
    //           //   feature.properties.pop_est +
    //           //   "</br>" +
    //           //
    //           //   "<b>Income level: </b>" +
    //           //   feature.properties.income_grp +
    //           //   "</br>"
    //           //   //
    //           //   // "<b>Road Density: </b>" +
    //           //   // feature.properties.rd_density.toFixed(3) + " per square km" +
    //           //   // "</br>" +
    //           //   //
    //           //   // "</br>" +
    //           //   // "<b>Data Collected Year: </b>" +
    //           //   // feature.properties.year
    //         // );
    //
    //           //This following code has problems of flashing popups
    //           layer.on('mouseover', function(e){
    //             document.getElementById("results").style.display = "inline";
    //             $('#countryname').text(feature.properties.admin);
    //             $('#countrygdp').text("$" + (feature.properties.gdp_md_est/1000).toFixed(3) + " billion");
    //             $('#countrygdpper').text("$" + 1000000 * (feature.properties.gdp_md_est / feature.properties.pop_est).toFixed(3));
    //             $('#countrypop').text(feature.properties.pop_est);
    //             $('#countryincome').text(feature.properties.income_grp.substr(3));
    //
    //             layer.setStyle(highlightStyle);
    //             //create a popup with a unique ID linked to it
    //             var popup = $("<div></div>", {
    //               id: "popup-" + feature.properties.admin,
    //               css: {
    //                 position: "absolute",
    //                 bottom: "100px",
    //                 left: "400px",
    //                 // height: "300px",
    //                 // z-index: 1002,
    //                 backgroundColor: "white",
    //                 padding: "8px",
    //                 border: "1px solid #ccc"
    //               }
    //             });
    //             var headline = $("<div></div>", {
    //                 text:
    //                   "Name: " + feature.properties.admin,
    //                 css: {fontSize: "16px", marginBottom: "3px"}
    //             }).appendTo(popup);
    //
    //           });
    //
    //           layer.on('mouseout', function(e){
    //             console.log("mouse left");
    //             // if (layer.feature.properties.name_long == "Dominican Republic" ||
    //             //     layer.feature.properties.name_long == "Haiti" ||
    //             //     layer.feature.properties.name_long == "Paraguay" ||
    //             //     layer.feature.properties.name_long == "Brazil" ||
    //             //     layer.feature.properties.name_long == "Honduras" ||
    //             //     layer.feature.properties.name_long == "El Salvador" ||
    //             //     layer.feature.properties.name_long == "Guatemala" ||
    //             //     layer.feature.properties.name_long == "Nicaragua"){
    //             //
    //             //     layer.setStyle(tophighlightStyle);
    //             // } else {
    //                 layer.setStyle(myCustomStyle);
    //             // }
    //
    //             $("#popup-" + feature.properties.admin).remove();
    //             console.log("popup removed.");
    //             // this.closePopup();
    //           });
    //
    //           layer.on('click', function (event) {
    //
    //             //ADD THE BLOG OF CODE FOR BORDER AREA BEING CLICKED
    //             // Northern Triangle
    //             if (layer.feature.properties.name_long == "Dominican Republic" ||
    //                 layer.feature.properties.name_long == "Haiti" ||
    //                 layer.feature.properties.name_long == "Paraguay" ||
    //                 layer.feature.properties.name_long == "Brazil" ||
    //                 layer.feature.properties.name_long == "Honduras" ||
    //                 layer.feature.properties.name_long == "El Salvador" ||
    //                 layer.feature.properties.name_long == "Guatemala" ||
    //                 layer.feature.properties.name_long == "Nicaragua"){
    //
    //                   map.fitBounds(layer.getBounds(),{
    //                              padding: [80,80]
    //                            });
    //                   // layer.setStyle(clickStyle);
    //
    //                   layer.setStyle(highlightStyle);
    //
    //
    //             }
    //             // Paraguay
    //
    //             // Haiti Dominican Republic
    //
    //             // _.each(ParaguayNation,function(layer){
    //             //   map.addLayer(layer);
    //             // });
    //             // _.each(layerMappedPolygons,function(layer){
    //               // map.removeLayer(layerMappedPolygons);
    //             // });
    //
    //             //
    //             // layer.on('mouseout', function(e){
    //             //   layer.setStyle(pastclickStyle);
    //             // });
    //
    //             // layer.bindPopup(
    //             //   "<b>Name: </b>" +
    //             //     feature.properties.admin +
    //             //     "</br>"
    //             // );
    //           });
    //
    //
    //           //reference this one on complete example
    //           // with the highlight popup appended as an HTML div element somerwhere off the map
    //           // http://palewi.re/posts/2012/03/26/leaflet-recipe-hover-events-features-and-polygons/
    //
    //          }
    //
    //         });
    //         // layerMappedPolygons.eachLayer(eachFeatureFunction);
    //         // console.log(layerMappedPolygons[0].id);
    //       })
    //     });

//the online local host example
// $.getJSON(myGeoJSONPath,function(data){
//             var map = L.map('map').setView([39.74739, -105], 4);
//
//             L.geoJson(data, {
//                 clickable: false,
//                 style: myCustomStyle
//             }).addTo(map);
//         })

//THE SEARCH BUTTON WORKABLE EXAMPLE
//FIX THIS ISSUE!!!
// $('#sbutton-selpage').click(function(){
//   console.log("search clicked.");
// });

$(document).ready(function(){
  $.ajax(ParaguayNationUrl).done(function(data) {
    var parsedData00 = JSON.parse(data);
    console.log(parsedData00);
    console.log("parsed00");
    var itemB = L.geoJson(parsedData00,
      {
        style: highlightStyle,
        pointToLayer: function (feature, latlng) {
          return new L.Polygon(latlng, {
          });
        },

        });
      ParaguayNation.push(itemB);
      })
    });

$('#sbutton-selpage').click(function(){
  map.setView([-23.414, -57.384],5);
  _.each(ParaguayNation,function(layer){
    map.addLayer(layer);
  });
  console.log("nation bound added.");
});

  // var searchfunction = function(){
  // console.log("search button clicked.");
  // map.setView([-23.414, -57.384],5);
  // };

// $('#sbutton-selpage').click(function(){
//   console.log("search button clicked.")
//   // var searchval = $('#searchinput').val();
//   // console.log("your input is " + searchval);
//
//   // _.each(layerMappedPolygons, function(feature){
//   //   if (searchval == feature.properties.admin){
//   //     map.fitBounds(feature.layer.getBounds(),{
//   //                padding: [100,180]
//   //              });
//   //   }
//   //   else{
//   //         alert("Please type in the correct name.");
//   //   }
//   // })
// });
