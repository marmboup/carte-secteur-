ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32628").setExtent([98339.667536, 1319334.267383, 1063402.368842, 1879128.946086]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Rgions_1 = new ol.format.GeoJSON();
var features_Rgions_1 = format_Rgions_1.readFeatures(json_Rgions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_Rgions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rgions_1.addFeatures(features_Rgions_1);
var lyr_Rgions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rgions_1, 
                style: style_Rgions_1,
                popuplayertitle: 'Régions',
                interactive: true,
    title: 'Régions<br />\
    <img src="styles/legend/Rgions_1_0.png" /> 44-44<br />\
    <img src="styles/legend/Rgions_1_1.png" /> 44 - 252<br />\
    <img src="styles/legend/Rgions_1_2.png" /> 252 - 428<br />\
    <img src="styles/legend/Rgions_1_3.png" /> 428 - 7277<br />' });
var format_secteurs_2 = new ol.format.GeoJSON();
var features_secteurs_2 = format_secteurs_2.readFeatures(json_secteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32628'});
var jsonSource_secteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_secteurs_2.addFeatures(features_secteurs_2);
var lyr_secteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_secteurs_2, 
                style: style_secteurs_2,
                popuplayertitle: 'secteurs',
                interactive: true,
    title: 'secteurs<br />\
    <img src="styles/legend/secteurs_2_0.png" /> agri<br />\
    <img src="styles/legend/secteurs_2_1.png" /> minier<br />\
    <img src="styles/legend/secteurs_2_2.png" /> telecom<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_Rgions_1.setVisible(true);lyr_secteurs_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Rgions_1,lyr_secteurs_2];
lyr_Rgions_1.set('fieldAliases', {'CODE': 'CODE', 'NOM': 'NOM', 'THEME': 'THEME', 'PAYS': 'PAYS', 'IDUU': 'IDUU', 'SUM_SUPERF': 'SUM_SUPERF', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Régions': 'Régions', 'Population': 'Population', 'Densité': 'Densité', });
lyr_secteurs_2.set('fieldAliases', {'NOM': 'NOM', 'Population': 'Population', 'secteurs': 'secteurs', });
lyr_Rgions_1.set('fieldImages', {'CODE': 'TextEdit', 'NOM': 'TextEdit', 'THEME': 'TextEdit', 'PAYS': 'TextEdit', 'IDUU': 'TextEdit', 'SUM_SUPERF': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Régions': 'TextEdit', 'Population': 'TextEdit', 'Densité': 'TextEdit', });
lyr_secteurs_2.set('fieldImages', {'NOM': 'TextEdit', 'Population': 'TextEdit', 'secteurs': 'ValueMap', });
lyr_Rgions_1.set('fieldLabels', {'CODE': 'no label', 'NOM': 'inline label - always visible', 'THEME': 'no label', 'PAYS': 'inline label - always visible', 'IDUU': 'no label', 'SUM_SUPERF': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Régions': 'no label', 'Population': 'no label', 'Densité': 'no label', });
lyr_secteurs_2.set('fieldLabels', {'NOM': 'inline label - always visible', 'Population': 'inline label - always visible', 'secteurs': 'inline label - always visible', });
lyr_secteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});