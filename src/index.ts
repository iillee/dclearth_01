import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3, } from '@dcl/sdk/math'
import { createVenice_Row1_Scene } from './veniceR1';
import { createVenice_Row2_Scene } from './veniceR2';
import { createVenice_Row3_Scene } from './veniceR3';
import { createVenice_Row4_Scene } from './veniceR4';
import { createVenice_Row5_Scene } from './veniceR5';


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
createVenice_Row1_Scene();
createVenice_Row2_Scene();
createVenice_Row3_Scene();
createVenice_Row4_Scene();
createVenice_Row5_Scene();
