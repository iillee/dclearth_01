import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3, } from '@dcl/sdk/math'
import { createBerlinScene } from './berlin';
import { createNolaScene } from './nola';
import { createParisScene } from './paris';


export function main() {

    let frame = engine.addEntity()
  
    GltfContainer.create(frame, {
      src: 'models/frame.glb',
      invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(frame, {
      position: Vector3.create(0, 0, 0),
      scale: Vector3.create(1, 1, 1),
    })

}

// INIT CITY SCENES
createBerlinScene();
//createNolaScene();
//createParisScene();