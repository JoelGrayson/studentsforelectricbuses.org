import { useEffect, useRef } from 'react';
import Image from 'next/image';

// Config
const START_LOC=[206, 168];
const SPEED=[1.8, .9];
const FREQ=300; //ms to spawn circles

export default function IdlingEngine() {
    const fumesRef=useRef(null);
    
    useEffect(()=>{
        const canvas=fumesRef.current;
        const c=canvas.getContext("2d"); //context
        let tSinceCircle=Date.now();
    
        class FumeCircle {
            constructor() {
                this.x=START_LOC[0];
                this.y=START_LOC[1];
                this.r=0;
                this.render();
                this.opacity=1;
            }
            update() {
                this.x+=SPEED[0]*(Math.random())*2;
                this.y+=SPEED[1]*(Math.random())*2;
                this.opacity-=0.01;
                this.render();
                this.r+=0.35;
            }
            render() {
                c.beginPath();
                c.arc(this.x, this.y, this.r, 0, Math.PI*2);
                c.strokeStyle=`rgb(30, 30, 30, ${this.opacity})`;
                c.stroke();
                c.fillStyle=`rgb(100, 100, 100, ${this.opacity})`;
                c.lineWidth=3+Math.random()*2;
                c.fill();
            }
        }
        
        const circs=[];
        
        function animate() {
            requestAnimationFrame(animate);
            c.clearRect(0, 0, innerWidth, innerHeight); //clear the frame
            
            if (Date.now()-tSinceCircle>(FREQ*Math.random()*2)) { //±200
                tSinceCircle=Date.now();
                circs.push(new FumeCircle());
            }
            
            for (let i=0; i<circs.length; i++) {
                circs[i].update();
            }
        }
        animate();
    }, []);
    


    return (<div style={{
        display: 'block',
        position: 'relative',
        width: 500,
        height: 500
    }}>
        {/* Diesel Bus */}
        <Image width={300} height={200} src="/images/idling.png" id="idling" alt="Idling" />
        {/* Idling Canvas */}
        <canvas id="fumes" width="500px" height="300px" ref={fumesRef} style={{
            position: 'absolute',
            top: 0,
            left: 0,
        }} />
    </div>);
}