var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_REG_NANDO_2 = new ol.format.GeoJSON();
var features_REG_NANDO_2 = format_REG_NANDO_2.readFeatures(json_REG_NANDO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REG_NANDO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REG_NANDO_2.addFeatures(features_REG_NANDO_2);
var lyr_REG_NANDO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_REG_NANDO_2, 
                style: style_REG_NANDO_2,
                popuplayertitle: 'REG_NANDO',
                interactive: true,
                title: '<img src="styles/legend/REG_NANDO_2.png" /> REG_NANDO'
            });
var format_COMMUNE_REGION_NANDO1_3 = new ol.format.GeoJSON();
var features_COMMUNE_REGION_NANDO1_3 = format_COMMUNE_REGION_NANDO1_3.readFeatures(json_COMMUNE_REGION_NANDO1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMMUNE_REGION_NANDO1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMMUNE_REGION_NANDO1_3.addFeatures(features_COMMUNE_REGION_NANDO1_3);
var lyr_COMMUNE_REGION_NANDO1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMMUNE_REGION_NANDO1_3, 
                style: style_COMMUNE_REGION_NANDO1_3,
                popuplayertitle: 'COMMUNE_REGION_NANDO1',
                interactive: true,
    title: 'COMMUNE_REGION_NANDO1<br />\
    <img src="styles/legend/COMMUNE_REGION_NANDO1_3_0.png" /> 32 - 117<br />\
    <img src="styles/legend/COMMUNE_REGION_NANDO1_3_1.png" /> 117 - 202<br />\
    <img src="styles/legend/COMMUNE_REGION_NANDO1_3_2.png" /> 202 - 286<br />\
    <img src="styles/legend/COMMUNE_REGION_NANDO1_3_3.png" /> 286 - 371<br />\
    <img src="styles/legend/COMMUNE_REGION_NANDO1_3_4.png" /> 371 - 456<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_REG_NANDO_2.setVisible(true);lyr_COMMUNE_REGION_NANDO1_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatelliteHybrid_1,lyr_REG_NANDO_2,lyr_COMMUNE_REGION_NANDO1_3];
lyr_REG_NANDO_2.set('fieldAliases', {'Nom': 'Nom', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_COMMUNE_REGION_NANDO1_3.set('fieldAliases', {'COUNTRY': 'COUNTRY', 'NAME_3': 'NAME_3', 'COMMUNE__1': 'COMMUNE__1', 'Sup_km²': 'Sup_km²', 'Dens': 'Dens', });
lyr_REG_NANDO_2.set('fieldImages', {'Nom': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_COMMUNE_REGION_NANDO1_3.set('fieldImages', {'COUNTRY': 'TextEdit', 'NAME_3': 'TextEdit', 'COMMUNE__1': 'TextEdit', 'Sup_km²': 'TextEdit', 'Dens': 'TextEdit', });
lyr_REG_NANDO_2.set('fieldLabels', {'Nom': 'inline label - always visible', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_COMMUNE_REGION_NANDO1_3.set('fieldLabels', {'COUNTRY': 'inline label - always visible', 'NAME_3': 'no label', 'COMMUNE__1': 'no label', 'Sup_km²': 'no label', 'Dens': 'inline label - always visible', });
lyr_COMMUNE_REGION_NANDO1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});