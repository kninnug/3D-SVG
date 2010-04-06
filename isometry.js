	var ThreeDee = {
		document: null,
		svgns: "http://www.w3.org/2000/svg",
		grid: {
			elm: null,
			x: 350,
			y: 50,
			scaleX: 1.25,
			scaleY: 0.75,
			rotate: 45
		},
		field: {
			size: 20,
			height: 5
		},
		fieldTypes: [
					 {color:"GreenYellow",border:""}, 
					 {color:"ForestGreen",border:""}, 
					 {color:"MediumTurquoise",border:""}, 
					 {color:"#302d2d",border:""}],
		fieldMap: [[ 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
				   [ 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
				   [ 1, 1, 1, 2, 2, 2, 2, 0, 1, 1, 1],
				   [ 1, 1, 1, 1, 0, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 0, 2, 2, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 2, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 0, 2, 2, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 2, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 0, 0, 1, 1],
				   [ 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 1],
				   [ 1, 1, 1, 1, 1, 0, 0, 2, 2, 0, 1],
				   [ 1, 1, 1, 1, 1, 1, 0, 0, 2, 0, 1],
				   [ 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 1],
				   [ 1, 1, 1, 1, 1, 1, 1, 0, 2, 0, 1]],
		heightMap: [[ 3, 4, 5, 5, 1, 1, 0, 1, 1, 1, 2, 2],
					[ 4, 5, 6, 5, 1, 0, 0, 0, 1, 1, 1, 2],
					[ 5, 6, 5, 4, 1, 0, 0, 0, 1, 1, 1, 1],
					[ 4, 5, 5, 4, 1, 0, 0, 0, 0, 1, 1, 1],
					[ 4, 5, 5, 4, 1, 0, 0, 0, 0, 1, 1, 1],
					[ 1, 4, 4, 1, 1, 0, 0, 0, 0, 0, 1, 1],
					[ 1, 3, 3, 1, 1, 0, 0, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, -1, -1, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
					[ 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1]],
		
		drawField: function(x, y){
			var elm = ThreeDee.document.createElementNS(ThreeDee.svgns, "polygon");
			field.setAttribute("id", "box-"+x+"-"+y);
			field.setAttribute("data-x", x);
			field.setAttribute("data-y", y);
			var posX = x*ThreeDee.field.size;
			var posY = y*ThreeDee.field.size;
			var topLeft = (posX-ThreeDee.heightMap[x][y]*ThreeDee.field.height)+","+
						  (posY-ThreeDee.heightMap[x][y]*ThreeDee.field.height);
			var topRight = ((posX+ThreeDee.field.size)-ThreeDee.heightMap[x+1][y]*ThreeDee.field.height)+","+
						   (posY-ThreeDee.heightMap[x+1][y]*ThreeDee.field.height);
			var bottomRight = ((posX+ThreeDee.field.size)-ThreeDee.heightMap[x+1][y+1]*ThreeDee.field.height)+","+
							  ((posY+ThreeDee.field.size)-ThreeDee.heightMap[x+1][y+1]*ThreeDee.field.height);
			var bottomLeft = (posX-ThreeDee.heightMap[x][y+1]*ThreeDee.field.height)+","+
							 ((posY+ThreeDee.field.size)-ThreeDee.heightMap[x][y+1]*ThreeDee.field.height);
			field.setAttribute("points", topLeft+" "+topRight+" "+bottomRight+" "+bottomLeft);
			field.setAttribute("fill", ThreeDee.fieldTypes[ThreeDee.fieldMap[x][y]].color);
			ThreeDee.grid.elm.appendChild(elm);
			field.onclick = ThreeDee.clickField;
			field.onmouseover = ThreeDee.hoverField;
			field.onmouseout = ThreeDee.leaveField;
			return field;
		},
		
		fromPolygonPoints: function(polygon){
			var points = polygon.split(" ");
			var topLeft = points[0].split(",");
			var topRight = points[1].split(",");
			var bottomRight = points[2].split(",");
			var bottomLeft = points[3].split(",");
			return {"topLeft":topLeft,"topRight":topRight,"bottomRight":bottomRight,"bottomLeft":bottomLeft};
		}
		
		toPolygonPoints: function(points){
			return points.topLeft.join(",")+" "+points.topRight.join(",")+" "+
				   points.bottomRight.join(",")+" "+points.bottomLeft.join(",");
		}
		
		changeHeight: function(elm, h){
			var x = parseInt(elm.getAttribute("data-x"));
			var y = parseInt(elm.getAttribute("data-y"));
			if(x > 0){
				var elmLeft = document.getElementById("box-"+(x-1)+"-"+y);
				// from the left element we change the top-right corner
				var points = ThreeDee.fromPolygonPoints(elm.getAttribute("points"));
				points.topRight[0] -= ThreeDee.heightMap[x-1][y]*ThreeDee.field.height;
			}
			if(y > 0){
				var elmTopLeft = document.getElementById("box-"+x
			}
		},
	};