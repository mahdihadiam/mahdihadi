import * as THREE from 'https://cdn.skypack.dev/three'
import {OrbitControls} from 'https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls'

const canvas = document.querySelector('canvas')

const scene = new THREE.Scene()

const material1 = new THREE.MeshStandardMaterial({color: 0xede135, emissive: 0x000000, roughness: 0, metalness: 0, wireframe: true})
const cube = new THREE.Mesh(new THREE.TorusGeometry(2, 1, 100, 100), material1)
scene.add(cube)
const material2 = new THREE.MeshStandardMaterial({color: 0x00ed35, emissive: 0x000000, roughness: 0, metalness: 0, wireframe: true})
const cube2 = new THREE.Mesh(new THREE.TorusGeometry(2, 1, 100, 100), material2)
cube2.rotation.x = Math.PI/2
cube2.position.x = 2
scene.add(cube2)

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.z = -10
scene.add(camera)

const light1 = new THREE.AmbientLight(0xffffff)
scene.add(light1)
const light2 = new THREE.PointLight(0xffffff)
light2.position.z = 30
light2.position.x = 300
scene.add(light2)
const light3 = new THREE.PointLight(0xffffff)
light3.position.z = 150
light3.position.y = 300
scene.add(light3)

window.addEventListener('dblclick', () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})

// const axesHelper = new THREE.AxesHelper(5)
// scene.add(axesHelper)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

function tick() {
  controls.update()
  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)
}
tick()