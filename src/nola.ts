import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3, } from '@dcl/sdk/math'

export function createNolaScene() {
  
      let tile_01= engine.addEntity()
    
      GltfContainer.create(tile_01, {
        src: 'models/nola.glb',
      }) 
  
      Transform.create(tile_01, {
        position: Vector3.create(0, 0, 0),
        scale: Vector3.create(1, 1, 1),
      })
  
      let collider_01 = engine.addEntity()
    
      GltfContainer.create(collider_01, {
        src: 'models/nola_collider.glb',
        invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
      }) 
  
      Transform.create(collider_01, {
        position: Vector3.create(0, 0, 0),
        scale: Vector3.create(1, 1, 1),
      })
  }