var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var json = {"children": [{"id": "Artist_0", "data": {"$area": 4304, "querycount": 4304, "$color": "#FFF5EB"}, "children": [], "name": ""}, {"id": "Artist_1", "data": {"$area": 13802, "querycount": 13802, "$color": "#FEE6CE"}, "children": [], "name": "AGRONOMIA"}, {"id": "Artist_2", "data": {"$area": 129621, "querycount": 129621, "$color": "#A63603"}, "children": [], "name": "ALMAGRO"}, {"id": "Artist_3", "data": {"$area": 168186, "querycount": 168186, "$color": "#7F2704"}, "children": [], "name": "BALVANERA"}, {"id": "Artist_4", "data": {"$area": 33772, "querycount": 33772, "$color": "#F16913"}, "children": [], "name": "BARRACAS"}, {"id": "Artist_5", "data": {"$area": 118143, "querycount": 118143, "$color": "#A63603"}, "children": [{"id": "Artist_53", "data": {"$area": 5919, "querycount": 5919, "$color": "#7f2704"}, "children": [{"id": "Artist_54", "data": {"y": "-34.562", "x": "-58.4567", "$area": 5268, "querycount": 5268, "$color": "#7f2704"}, "children": [], "name": "CABILDO AV. 2101"}, {"id": "Album_55", "data": {"$area": 651, "querycount": 651, "$color": "#d94801"}, "children": [], "name": "CABILDO AV. y JURAMENTO AV. Otras puertas"}], "name": "CABILDO AV. y JURAMENTO AV."}, {"id": "Artist_56", "data": {"$area": 1815, "querycount": 1815, "$color": "#a63603"}, "children": [{"id": "Artist_57", "data": {"y": "-34.5655", "x": "-58.4533", "$area": 763, "querycount": 763, "$color": "#7f2704"}, "children": [], "name": "CABILDO AV. 1705"}, {"id": "Artist_58", "data": {"y": "-34.5656", "x": "-58.4532", "$area": 748, "querycount": 748, "$color": "#7f2704"}, "children": [], "name": "CABILDO AV. 1701"}, {"id": "Album_59", "data": {"$area": 304, "querycount": 304, "$color": "#a63603"}, "children": [], "name": "CABILDO AV. y HERNANDEZ, JOSE Otras puertas"}], "name": "CABILDO AV. y HERNANDEZ, JOSE"}, {"id": "Album_60", "data": {"$area": 110409, "querycount": 110409, "$color": "#7f2704"}, "children": [], "name": "BELGRANO Otras esquinas"}], "name": "BELGRANO"}, {"id": "Artist_6", "data": {"$area": 14026, "querycount": 14026, "$color": "#FEE6CE"}, "children": [], "name": "BOCA"}, {"id": "Artist_7", "data": {"$area": 30472, "querycount": 30472, "$color": "#FD8D3C"}, "children": [], "name": "BOEDO"}, {"id": "Artist_8", "data": {"$area": 141560, "querycount": 141560, "$color": "#7F2704"}, "children": [], "name": "CABALLITO"}, {"id": "Artist_9", "data": {"$area": 37252, "querycount": 37252, "$color": "#F16913"}, "children": [], "name": "CHACARITA"}, {"id": "Artist_10", "data": {"$area": 12210, "querycount": 12210, "$color": "#FEE6CE"}, "children": [], "name": "COGHLAN"}, {"id": "Artist_11", "data": {"$area": 53205, "querycount": 53205, "$color": "#D94801"}, "children": [], "name": "COLEGIALES"}, {"id": "Artist_12", "data": {"$area": 35499, "querycount": 35499, "$color": "#F16913"}, "children": [], "name": "CONSTITUCION"}, {"id": "Artist_13", "data": {"$area": 20, "querycount": 20, "$color": "#FFFFFFF"}, "children": [], "name": "Dique 1"}, {"id": "Artist_14", "data": {"$area": 120, "querycount": 120, "$color": "#FFFFFFF"}, "children": [], "name": "Dique 2"}, {"id": "Artist_15", "data": {"$area": 329, "querycount": 329, "$color": "#FFFFFFF"}, "children": [], "name": "Dique 3"}, {"id": "Artist_16", "data": {"$area": 194, "querycount": 194, "$color": "#FFFFFFF"}, "children": [], "name": "Dique 4"}, {"id": "Artist_17", "data": {"$area": 73439, "querycount": 73439, "$color": "#D94801"}, "children": [], "name": "FLORES"}, {"id": "Artist_18", "data": {"$area": 18740, "querycount": 18740, "$color": "#FDAE6B"}, "children": [], "name": "FLORESTA"}, {"id": "Artist_19", "data": {"$area": 17534, "querycount": 17534, "$color": "#FDD0A2"}, "children": [], "name": "LINIERS"}, {"id": "Artist_20", "data": {"$area": 22656, "querycount": 22656, "$color": "#FDAE6B"}, "children": [], "name": "MATADEROS"}, {"id": "Artist_21", "data": {"$area": 106685, "querycount": 106685, "$color": "#A63603"}, "children": [], "name": "MONSERRAT"}, {"id": "Artist_22", "data": {"$area": 15964, "querycount": 15964, "$color": "#FEE6CE"}, "children": [], "name": "MONTE CASTRO"}, {"id": "Artist_23", "data": {"$area": 18459, "querycount": 18459, "$color": "#FDD0A2"}, "children": [], "name": "NUEVA POMPEYA"}, {"id": "Artist_24", "data": {"$area": 44090, "querycount": 44090, "$color": "#D94801"}, "children": [], "name": "NU\u00d1EZ"}, {"id": "Artist_25", "data": {"$area": 335623, "querycount": 335623, "$color": "#7F2704"}, "children": [], "name": "PALERMO"}, {"id": "Artist_26", "data": {"$area": 13480, "querycount": 13480, "$color": "#FEE6CE"}, "children": [], "name": "PARQUE AVELLANEDA"}, {"id": "Artist_27", "data": {"$area": 26286, "querycount": 26286, "$color": "#FD8D3C"}, "children": [], "name": "PARQUE CHACABUCO"}, {"id": "Artist_28", "data": {"$area": 11301, "querycount": 11301, "$color": "#FEE6CE"}, "children": [], "name": "PARQUE CHAS"}, {"id": "Artist_29", "data": {"$area": 23428, "querycount": 23428, "$color": "#FDAE6B"}, "children": [], "name": "PARQUE PATRICIOS"}, {"id": "Artist_30", "data": {"$area": 17583, "querycount": 17583, "$color": "#FDD0A2"}, "children": [], "name": "PATERNAL"}, {"id": "Artist_31", "data": {"$area": 8793, "querycount": 8793, "$color": "#FFF5EB"}, "children": [], "name": "PUERTO MADERO"}, {"id": "Artist_32", "data": {"$area": 232330, "querycount": 232330, "$color": "#7F2704"}, "children": [], "name": "RECOLETA"}, {"id": "Artist_33", "data": {"$area": 86456, "querycount": 86456, "$color": "#A63603"}, "children": [], "name": "RETIRO"}, {"id": "Artist_34", "data": {"$area": 33809, "querycount": 33809, "$color": "#F16913"}, "children": [], "name": "SAAVEDRA"}, {"id": "Artist_35", "data": {"$area": 32152, "querycount": 32152, "$color": "#FD8D3C"}, "children": [], "name": "SAN CRISTOBAL"}, {"id": "Artist_36", "data": {"$area": 208367, "querycount": 208367, "$color": "#7F2704"}, "children": [], "name": "SAN NICOLAS"}, {"id": "Artist_37", "data": {"$area": 32614, "querycount": 32614, "$color": "#F16913"}, "children": [], "name": "SAN TELMO"}, {"id": "Artist_38", "data": {"$area": 17194, "querycount": 17194, "$color": "#FDD0A2"}, "children": [], "name": "VELEZ SARSFIELD"}, {"id": "Artist_39", "data": {"$area": 5106, "querycount": 5106, "$color": "#FFF5EB"}, "children": [], "name": "VERSALLES"}, {"id": "Artist_40", "data": {"$area": 105518, "querycount": 105518, "$color": "#A63603"}, "children": [], "name": "VILLA CRESPO"}, {"id": "Artist_41", "data": {"$area": 29400, "querycount": 29400, "$color": "#FD8D3C"}, "children": [], "name": "VILLA DEL PARQUE"}, {"id": "Artist_42", "data": {"$area": 39522, "querycount": 39522, "$color": "#D94801"}, "children": [], "name": "VILLA DEVOTO"}, {"id": "Artist_43", "data": {"$area": 21807, "querycount": 21807, "$color": "#FDAE6B"}, "children": [], "name": "VILLA GRAL. MITRE"}, {"id": "Artist_44", "data": {"$area": 15087, "querycount": 15087, "$color": "#FEE6CE"}, "children": [], "name": "VILLA LUGANO"}, {"id": "Artist_45", "data": {"$area": 12021, "querycount": 12021, "$color": "#FEE6CE"}, "children": [], "name": "VILLA LURO"}, {"id": "Artist_46", "data": {"$area": 23845, "querycount": 23845, "$color": "#FD8D3C"}, "children": [], "name": "VILLA ORTUZAR"}, {"id": "Artist_47", "data": {"$area": 20748, "querycount": 20748, "$color": "#FDAE6B"}, "children": [], "name": "VILLA PUEYRREDON"}, {"id": "Artist_48", "data": {"$area": 6321, "querycount": 6321, "$color": "#FFF5EB"}, "children": [], "name": "VILLA REAL"}, {"id": "Artist_49", "data": {"$area": 4377, "querycount": 4377, "$color": "#FFF5EB"}, "children": [], "name": "VILLA RIACHUELO"}, {"id": "Artist_50", "data": {"$area": 17199, "querycount": 17199, "$color": "#FDD0A2"}, "children": [], "name": "VILLA SANTA RITA"}, {"id": "Artist_51", "data": {"$area": 8137, "querycount": 8137, "$color": "#FFF5EB"}, "children": [], "name": "VILLA SOLDATI"}, {"id": "Artist_52", "data": {"$area": 59835, "querycount": 59835, "$color": "#D94801"}, "children": [], "name": "VILLA URQUIZA"}], "id": "root", "name": "Buenos Aires"}

  //init TreeMap
  var tm = new $jit.TM.Squarified({
    //where to inject the visualization
    injectInto: 'infovis',
    levelsToShow: 1,
    //parent box title heights
    titleHeight: 15,
    //enable animations
    animate: animate,
    //box offsets
    offset: 1,
    //Attach left and right click events
    Events: {
      enable: true,
      onClick: function(node) {
        if(node){
          if (typeof(node.data.x) !== 'undefined'){
            window.open("https://www.google.com.ar/maps/@"+node.data.y+","+node.data.x+",19z");
          }
          else{
           tm.enter(node);
         }
       }
      },
      onRightClick: function() {
        tm.out();
      }
    },
    duration: 1000,
    //Enable tips
    Tips: {
      enable: true,
      //add positioning offsets
      offsetX: 20,
      offsetY: 20,
      //implement the onShow method to
      //add content to the tooltip when a node
      //is hovered
      onShow: function(tip, node, isLeaf, domElement) {
        var html = "<div class=\"tip-title\">" + node.name 
          + "</div><div class=\"tip-text\">";
        var data = node.data;
        if(data.querycount) {
          html += "Consultas: " + data.querycount;
        }
        tip.innerHTML =  html; 
      }  
    },
    //Add the name of the node in the correponding label
    //This method is called once, on label creation.
    onCreateLabel: function(domElement, node){
        domElement.innerHTML = node.name;
        var style = domElement.style;
        style.display = '';
        style.border = '1px solid transparent';
        domElement.onmouseover = function() {
          style.border = '1px solid #9FD4FF';
        };
        domElement.onmouseout = function() {
          style.border = '1px solid transparent';
        };
        

    }
  });
  tm.loadJSON(json);
  tm.refresh();
  //end
  //add events to radio buttons
  var sq = $jit.id('r-sq'),
      st = $jit.id('r-st'),
      sd = $jit.id('r-sd');
  var util = $jit.util;
  util.addEvent(sq, 'change', function() {
    if(!sq.checked) return;
    util.extend(tm, new $jit.Layouts.TM.Squarified);
    tm.refresh();
  });
  util.addEvent(st, 'change', function() {
    if(!st.checked) return;
    util.extend(tm, new $jit.Layouts.TM.Strip);
    tm.layout.orientation = "v";
    tm.refresh();
  });
  util.addEvent(sd, 'change', function() {
    if(!sd.checked) return;
    util.extend(tm, new $jit.Layouts.TM.SliceAndDice);
    tm.layout.orientation = "v";
    tm.refresh();
  });
  //add event to the back button
  var back = $jit.id('back');
  $jit.util.addEvent(back, 'click', function() {
    tm.out();
  });
}
