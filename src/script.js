import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Sun
const sunGeometry = new THREE.SphereGeometry(1, 32, 32)
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
const sun = new THREE.Mesh(sunGeometry, sunMaterial)

// Earth
const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const earth = new THREE.Mesh(earthGeometry, earthMaterial)
earth.position.set(3, 0, 0)

scene.add(sun)
scene.add(earth)

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
)
camera.position.set(0, 0, 10)
camera.lookAt(0, 0, 0)

scene.add(camera)

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
