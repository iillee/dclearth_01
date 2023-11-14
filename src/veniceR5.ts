import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3,Quaternion } from '@dcl/sdk/math'

export function createVenice_Row5_Scene() {

    let tile_01= engine.addEntity()
  
    GltfContainer.create(tile_01, {
      src: 'models/tiles/25.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()
  
    GltfContainer.create(tile_02, {
      src: 'models/tiles/26.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()
  
    GltfContainer.create(tile_03, {
      src: 'models/tiles/27.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()
  
    GltfContainer.create(tile_04, {
      src: 'models/tiles/28.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()
  
    GltfContainer.create(tile_05, {
      src: 'models/tiles/29.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()
  
    GltfContainer.create(tile_06, {
      src: 'models/tiles/30.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 