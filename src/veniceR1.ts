import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Quaternion } from '@dcl/sdk/math'
import { scale, x, y, z } from './transforms'


export function createVenice_Row1_Scene() {

    let tile_01= engine.addEntity()
  
    GltfContainer.create(tile_01, {
      src: 'models/tiles/01.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()

    GltfContainer.create(tile_02, {
      src: 'models/tiles/02.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()

    GltfContainer.create(tile_03, {
      src: 'models/tiles/03.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()

    GltfContainer.create(tile_04, {
      src: 'models/tiles/04.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()

    GltfContainer.create(tile_05, {
      src: 'models/tiles/05.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()

    GltfContainer.create(tile_06, {
      src: 'models/tiles/06.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 