import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const SCALE_FACTOR = 2
const DIAMETER_FACTOR = 1000
const DISTANCE_FACTOR = 1000000

const SUN_DIAMETER = 832337 // miles
const MERCURY_DIAMETER = 3032 // miles
const VENUS_DIAMETER = 7521 // miles
const EARTH_DIAMETER = 7917.5 // miles
const MARS_DIAMETER = 4212 // miles
const JUPITER_DIAMETER = 86881 // miles
const SATURN_DIAMETER = 72367 // miles
const URANUS_DIAMETER = 31518 // miles
const NEPTUNE_DIAMETER = 30599 // miles

const MERCURY_DISTANCE_FROM_SUN = 36000000 // miles
const VENUS_DISTANCE_FROM_SUN = 67000000 // miles
const EARTH_DISTANCE_FROM_SUN = 92960000 // miles
const MARS_DISTANCE_FROM_SUN = 141600000 // miles
const JUPITER_DISTANCE_FROM_SUN = 483800000 // miles
const SATURN_DISTANCE_FROM_SUN = 890800000 // miles
const URANUS_DISTANCE_FROM_SUN = 1784000000 // miles
const NEPTUNE_DISTANCE_FROM_SUN = 2793000000 // miles

const MERCURY_ORBIT_DAYS = 88
const VENUS_ORBIT_DAYS = 225
const EARTH_ORBIT_DAYS = 365.5
const MARS_ORBIT_DAYS = 687
const JUPITER_ORBIT_DAYS = 4333
const SATURN_ORBIT_DAYS = 10759
const URANUS_ORBIT_DAYS = 30687
const NEPTUNE_ORBIT_DAYS = 60190

const getScaledDiameter = (diameter) =>
  Math.log(diameter / DIAMETER_FACTOR) * 0.5
const getScaledDistance = (distance) =>
  Math.log(distance / DISTANCE_FACTOR) * (SCALE_FACTOR * 10) - 60
const getScaledOrbitTime = (orbitTime) => Math.log(orbitTime) * SCALE_FACTOR

const SCALED_SUN_DIAMETER = getScaledDiameter(SUN_DIAMETER)

const planets = {
  mercury: {
    diameter: getScaledDiameter(MERCURY_DIAMETER),
    distanceFromSun: getScaledDistance(MERCURY_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(MERCURY_ORBIT_DAYS),
  },
  venus: {
    diameter: getScaledDiameter(VENUS_DIAMETER),
    distanceFromSun: getScaledDistance(VENUS_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(VENUS_ORBIT_DAYS),
  },
  earth: {
    diameter: getScaledDiameter(EARTH_DIAMETER),
    distanceFromSun: getScaledDistance(EARTH_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(EARTH_ORBIT_DAYS),
  },
  mars: {
    diameter: getScaledDiameter(MARS_DIAMETER),
    distanceFromSun: getScaledDistance(MARS_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(MARS_ORBIT_DAYS),
  },
  jupiter: {
    diameter: getScaledDiameter(JUPITER_DIAMETER),
    distanceFromSun: getScaledDistance(JUPITER_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(JUPITER_ORBIT_DAYS),
  },
  saturn: {
    diameter: getScaledDiameter(SATURN_DIAMETER),
    distanceFromSun: getScaledDistance(SATURN_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(SATURN_ORBIT_DAYS),
  },
  uranus: {
    diameter: getScaledDiameter(URANUS_DIAMETER),
    distanceFromSun: getScaledDistance(URANUS_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(URANUS_ORBIT_DAYS),
  },
  neptune: {
    diameter: getScaledDiameter(NEPTUNE_DIAMETER),
    distanceFromSun: getScaledDistance(NEPTUNE_DISTANCE_FROM_SUN),
    orbitTime: getScaledOrbitTime(NEPTUNE_ORBIT_DAYS),
  },
}

console.table(planets)

const getPlanetOrbit = (distance) =>
  new THREE.EllipseCurve(0, 0, distance, distance, 0, Math.PI * 2, false)

// Scene
const scene = new THREE.Scene()

// Sun
const sunGeometry = new THREE.SphereGeometry(SCALED_SUN_DIAMETER, 32, 32)
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 })
const sun = new THREE.Mesh(sunGeometry, sunMaterial)

// Mercury
const mercuryGeometry = new THREE.SphereGeometry(
  planets.mercury.diameter,
  32,
  32
)
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xc0c0c0 })
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial)

// Venus
const venusGeometry = new THREE.SphereGeometry(planets.venus.diameter, 32, 32)
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 })
const venus = new THREE.Mesh(venusGeometry, venusMaterial)

// Earth
const earthGeometry = new THREE.SphereGeometry(planets.earth.diameter, 32, 32)
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const earth = new THREE.Mesh(earthGeometry, earthMaterial)

// Mars
const marsGeometry = new THREE.SphereGeometry(planets.mars.diameter, 32, 32)
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 })
const mars = new THREE.Mesh(marsGeometry, marsMaterial)

// Jupiter
const jupiterGeometry = new THREE.SphereGeometry(
  planets.jupiter.diameter,
  32,
  32
)
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xffa500 })
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial)

// Saturn
const saturnGeometry = new THREE.SphereGeometry(planets.saturn.diameter, 32, 32)
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xd2b48c })
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial)

// Uranus
const uranusGeometry = new THREE.SphereGeometry(planets.uranus.diameter, 32, 32)
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x00bfff })
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial)

// Neptune
const neptuneGeometry = new THREE.SphereGeometry(
  planets.neptune.diameter,
  32,
  32
)
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x000080 })
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial)

scene.add(sun)
scene.add(mercury)
scene.add(venus)
scene.add(earth)
scene.add(mars)
scene.add(jupiter)
scene.add(saturn)
scene.add(uranus)
scene.add(neptune)

const mercuryOrbit = getPlanetOrbit(planets.mercury.distanceFromSun)
const venusOrbit = getPlanetOrbit(planets.venus.distanceFromSun)
const earthOrbit = getPlanetOrbit(planets.earth.distanceFromSun)
const marsOrbit = getPlanetOrbit(planets.mars.distanceFromSun)
const jupiterOrbit = getPlanetOrbit(planets.jupiter.distanceFromSun)
const saturnOrbit = getPlanetOrbit(planets.saturn.distanceFromSun)
const uranusOrbit = getPlanetOrbit(planets.uranus.distanceFromSun)
const neptuneOrbit = getPlanetOrbit(planets.neptune.distanceFromSun)

const mercuryRandomPosition = mercuryOrbit.getPointAt(Math.random())
mercury.position.set(
  mercuryRandomPosition.x,
  mercuryRandomPosition.y,
  mercuryRandomPosition.z
)

const venusRandomPosition = venusOrbit.getPointAt(Math.random())
venus.position.set(
  venusRandomPosition.x,
  venusRandomPosition.y,
  venusRandomPosition.z
)

const earthRandomPosition = earthOrbit.getPointAt(Math.random())
earth.position.set(
  earthRandomPosition.x,
  earthRandomPosition.y,
  earthRandomPosition.z
)

const marsRandomPosition = marsOrbit.getPointAt(Math.random())
mars.position.set(
  marsRandomPosition.x,
  marsRandomPosition.y,
  marsRandomPosition.z
)

const jupiterRandomPosition = jupiterOrbit.getPointAt(Math.random())
jupiter.position.set(
  jupiterRandomPosition.x,
  jupiterRandomPosition.y,
  jupiterRandomPosition.z
)

const saturnRandomPosition = saturnOrbit.getPointAt(Math.random())
saturn.position.set(
  saturnRandomPosition.x,
  saturnRandomPosition.y,
  saturnRandomPosition.z
)

const uranusRandomPosition = uranusOrbit.getPointAt(Math.random())
uranus.position.set(
  uranusRandomPosition.x,
  uranusRandomPosition.y,
  uranusRandomPosition.z
)

const neptuneRandomPosition = neptuneOrbit.getPointAt(Math.random())
neptune.position.set(
  neptuneRandomPosition.x,
  neptuneRandomPosition.y,
  neptuneRandomPosition.z
)

// Camera
const camera = new THREE.PerspectiveCamera(
  25,
  window.innerWidth / window.innerHeight
)
camera.position.set(52, -378, planets.neptune.distanceFromSun * 4)
camera.lookAt(0, 0, 0)

scene.add(camera)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Animate
const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()

  // Update the planets' orbits
  const mercuryPosition = mercuryOrbit.getPointAt(
    (elapsedTime * (1 / planets.mercury.orbitTime)) % 1
  )

  const venusPosition = venusOrbit.getPointAt(
    (elapsedTime * (1 / planets.venus.orbitTime)) % 1
  )

  const earthPosition = earthOrbit.getPointAt(
    (elapsedTime * (1 / planets.earth.orbitTime)) % 1
  )

  const marsPosition = marsOrbit.getPointAt(
    (elapsedTime * (1 / planets.mars.orbitTime)) % 1
  )

  const jupiterPosition = jupiterOrbit.getPointAt(
    (elapsedTime * (1 / planets.jupiter.orbitTime)) % 1
  )

  const saturnPosition = saturnOrbit.getPointAt(
    (elapsedTime * (1 / planets.saturn.orbitTime)) % 1
  )

  const uranusPosition = uranusOrbit.getPointAt(
    (elapsedTime * (1 / planets.uranus.orbitTime)) % 1
  )

  const neptunePosition = neptuneOrbit.getPointAt(
    (elapsedTime * (1 / planets.neptune.orbitTime)) % 1
  )

  mercury.position.set(mercuryPosition.x, mercuryPosition.y, mercuryPosition.z)
  venus.position.set(venusPosition.x, venusPosition.y, venusPosition.z)
  earth.position.set(earthPosition.x, earthPosition.y, earthPosition.z)
  mars.position.set(marsPosition.x, marsPosition.y, marsPosition.z)
  jupiter.position.set(jupiterPosition.x, jupiterPosition.y, jupiterPosition.z)
  saturn.position.set(saturnPosition.x, saturnPosition.y, saturnPosition.z)
  uranus.position.set(uranusPosition.x, uranusPosition.y, uranusPosition.z)
  neptune.position.set(neptunePosition.x, neptunePosition.y, neptunePosition.z)

  controls.update()

  // console.log(camera.position)

  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()
