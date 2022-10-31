import { useEffect, useRef } from 'react';
import * as THREE from 'three'

// init
const color = new THREE.Color(0xAA90FF)

const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshNormalMaterial();

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor(color)
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);


// animation

function animation(time) {

    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;

    renderer.render(scene, camera);

}


const LineBackground = () => {
    const el = useRef()
    useEffect(() => {
        el.current.appendChild(renderer.domElement);
    }, [])
    return (
        <div ref={el}></div>
    )
}

export default LineBackground