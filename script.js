const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('canvas-container').appendChild(renderer.domElement)

const sunGeometry = new THREE.SphereGeometry(1, 32, 32)
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const sun = new THREE.Mesh(sunGeometry, sunMaterial)

const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
earth.position.set(3, 0, 0)

scene.add(sun)
scene.add(earth)

function render() {
  requestAnimationFrame(render)

  // Rotate the celestial bodies
  sun.rotation.y += 0.01
  earth.rotation.y += 0.03

  renderer.render(scene, camera)
}

render()
