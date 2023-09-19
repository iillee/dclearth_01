Initial test of importing 3D geometry from Google Tiles into blender then into a DCL scene.

Process is pretty straightforward so far. Start with this tutorial/add on to get google data into blender: https://www.youtube.com/watch?v=BE65zyZyZ9k

This scene showcases 3 test tiles: Berlin, New Orleans, and Paris, each roughly 320 meters by 320 meters (20 parcels by 20 parcels). Right now, visual and collider layers are split into two .glbs to keep file sizes under 50mb.

Next Steps: 
 - test deploy to a DCL World
 - expand city scenes by adding additional surrounding tiles
 - develop a method for easily switching between city scenes
 - optimize 3D tiles for file size
 - automate tile .glb creation process if possible