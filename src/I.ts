import { engine, GltfContainer, Transform, ColliderLayer } from '@dcl/sdk/ecs'
import { Quaternion } from '@dcl/sdk/math'
import { scale, x, y, z } from './transforms'


export function createVenice_RowI() {
  
    let tile_01= engine.addEntity()

    GltfContainer.create(tile_01, {
      src: 'models/tiles/I01.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_01, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_02= engine.addEntity()

    GltfContainer.create(tile_02, {
      src: 'models/tiles/I02.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_02, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_03= engine.addEntity()

    GltfContainer.create(tile_03, {
      src: 'models/tiles/I03.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_03, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_04= engine.addEntity()

    GltfContainer.create(tile_04, {
      src: 'models/tiles/I04.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_04, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_05= engine.addEntity()

    GltfContainer.create(tile_05, {
      src: 'models/tiles/I05.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_05, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_06= engine.addEntity()

    GltfContainer.create(tile_06, {
      src: 'models/tiles/I06.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_06, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })


    let tile_07= engine.addEntity()

    GltfContainer.create(tile_07, {
      src: 'models/tiles/I07.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_07, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_08= engine.addEntity()

    GltfContainer.create(tile_08, {
      src: 'models/tiles/I08.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_08, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_09= engine.addEntity()

    GltfContainer.create(tile_09, {
      src: 'models/tiles/I09.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_09, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })


    let tile_10= engine.addEntity()

    GltfContainer.create(tile_10, {
      src: 'models/tiles/I10.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_10, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_11= engine.addEntity()

    GltfContainer.create(tile_11, {
      src: 'models/tiles/I11.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_11, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_12= engine.addEntity()

    GltfContainer.create(tile_12, {
      src: 'models/tiles/I12.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_12, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_13= engine.addEntity()

    GltfContainer.create(tile_13, {
      src: 'models/tiles/I13.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_13, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_14= engine.addEntity()

    GltfContainer.create(tile_14, {
      src: 'models/tiles/I14.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_14, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_15= engine.addEntity()

    GltfContainer.create(tile_15, {
      src: 'models/tiles/I15.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_15, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_16= engine.addEntity()

    GltfContainer.create(tile_16, {
      src: 'models/tiles/I16.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_16, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_17= engine.addEntity()

    GltfContainer.create(tile_17, {
      src: 'models/tiles/I17.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_17, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_18= engine.addEntity()

    GltfContainer.create(tile_18, {
      src: 'models/tiles/I18.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_18, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_19= engine.addEntity()

    GltfContainer.create(tile_19, {
      src: 'models/tiles/I19.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_19, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_20= engine.addEntity()

    GltfContainer.create(tile_20, {
      src: 'models/tiles/I20.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_20, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_21= engine.addEntity()

    GltfContainer.create(tile_21, {
      src: 'models/tiles/I21.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_21, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_22= engine.addEntity()

    GltfContainer.create(tile_22, {
      src: 'models/tiles/I22.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_22, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_23= engine.addEntity()

    GltfContainer.create(tile_23, {
      src: 'models/tiles/I23.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_23, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

    let tile_24= engine.addEntity()

    GltfContainer.create(tile_24, {
      src: 'models/tiles/I24.glb',
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS,
    }) 

    Transform.create(tile_24, {
      position: { x: (x), y: (z), z: (y)}, 
      scale: { x: (scale), y: (scale), z: (scale)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0)
    })

} 