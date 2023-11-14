import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3,Quaternion } from '@dcl/sdk/math'

export function createVenice_Row3_Scene() {

    let tile_01= engine.addEntity()
  
    GltfContainer.create(tile_01, {
      src: 'models/tiles/13.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()
  
    GltfContainer.create(tile_02, {
      src: 'models/tiles/14.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()
  
    GltfContainer.create(tile_03, {
      src: 'models/tiles/15.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()
  
    GltfContainer.create(tile_04, {
      src: 'models/tiles/16.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()
  
    GltfContainer.create(tile_05, {
      src: 'models/tiles/17.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()
  
    GltfContainer.create(tile_06, {
      src: 'models/tiles/18.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 