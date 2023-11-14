import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Vector3,Quaternion } from '@dcl/sdk/math'

export function createVenice_Row2_Scene() {

    let tile_01= engine.addEntity()
  
    GltfContainer.create(tile_01, {
      src: 'models/tiles/07.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()
  
    GltfContainer.create(tile_02, {
      src: 'models/tiles/08.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()
  
    GltfContainer.create(tile_03, {
      src: 'models/tiles/09.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()
  
    GltfContainer.create(tile_04, {
      src: 'models/tiles/10.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()
  
    GltfContainer.create(tile_05, {
      src: 'models/tiles/11.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()
  
    GltfContainer.create(tile_06, {
      src: 'models/tiles/12.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: Vector3.create(44, -5, 148),
      scale: Vector3.create(.2, .2, .2),
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 