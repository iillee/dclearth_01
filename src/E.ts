import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Quaternion } from '@dcl/sdk/math'
import { scale, x, y, z } from './transforms'


export function createVenice_RowE() {

    let tile_01= engine.addEntity()

    GltfContainer.create(tile_01, {
      src: 'models/tiles/E01.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()

    GltfContainer.create(tile_02, {
      src: 'models/tiles/E02.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()

    GltfContainer.create(tile_03, {
      src: 'models/tiles/E03.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()

    GltfContainer.create(tile_04, {
      src: 'models/tiles/E04.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()

    GltfContainer.create(tile_05, {
      src: 'models/tiles/E05.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()

    GltfContainer.create(tile_06, {
      src: 'models/tiles/E06.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })


    let tile_07= engine.addEntity()

    GltfContainer.create(tile_07, {
      src: 'models/tiles/E07.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_07, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_08= engine.addEntity()

    GltfContainer.create(tile_08, {
      src: 'models/tiles/E08.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_08, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_09= engine.addEntity()

    GltfContainer.create(tile_09, {
      src: 'models/tiles/E09.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_09, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })


    let tile_10= engine.addEntity()

    GltfContainer.create(tile_10, {
      src: 'models/tiles/E10.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_10, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_11= engine.addEntity()

    GltfContainer.create(tile_11, {
      src: 'models/tiles/E11.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_11, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_12= engine.addEntity()

    GltfContainer.create(tile_12, {
      src: 'models/tiles/E12.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_12, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_13= engine.addEntity()

    GltfContainer.create(tile_13, {
      src: 'models/tiles/E13.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_13, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_14= engine.addEntity()

    GltfContainer.create(tile_14, {
      src: 'models/tiles/E14.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_14, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_15= engine.addEntity()

    GltfContainer.create(tile_15, {
      src: 'models/tiles/E15.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_15, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_16= engine.addEntity()

    GltfContainer.create(tile_16, {
      src: 'models/tiles/E16.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_16, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_17= engine.addEntity()

    GltfContainer.create(tile_17, {
      src: 'models/tiles/E17.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_17, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_18= engine.addEntity()

    GltfContainer.create(tile_18, {
      src: 'models/tiles/E18.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_18, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_19= engine.addEntity()

    GltfContainer.create(tile_19, {
      src: 'models/tiles/E19.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_19, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_20= engine.addEntity()

    GltfContainer.create(tile_20, {
      src: 'models/tiles/E20.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_20, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_21= engine.addEntity()

    GltfContainer.create(tile_21, {
      src: 'models/tiles/E21.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_21, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_22= engine.addEntity()

    GltfContainer.create(tile_22, {
      src: 'models/tiles/E22.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_22, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_23= engine.addEntity()

    GltfContainer.create(tile_23, {
      src: 'models/tiles/E23.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_23, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_24= engine.addEntity()

    GltfContainer.create(tile_24, {
      src: 'models/tiles/E24.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_24, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_25= engine.addEntity()

    GltfContainer.create(tile_25, {
      src: 'models/tiles/E25.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_25, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 