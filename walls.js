// AFRAME.registerComponent("walls",{
//     init:function(){
//         this.createWalls()
//     },
//     createWalls:function(){
//         for (var i = 0; i < 7; i++) {

//             var plane = document.createElement("a-entity");
//             plane.setAttribute("id", "plane" + i); 

//             posX = Math.random()*100 -50;
//             posY = 1.5;
//             posZ =Math.random()*100 -50;
      
//             position={x:posX,y:posY,z:posZ}
//             plane.setAttribute("position",position)
      
//             plane.setAttribute("geometry",{primitive:"plane",
//             height:10,
//             width:40,
//             color:'yellow'
//             })
      
//             plane.setAttribute("dynamic-body",{mass:0})
 
//             var scene=document.querySelector("#scene")
//             scene.appendChild(plane)
//           }
//     }
// })


