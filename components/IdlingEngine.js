import { useEffect, useRef } from 'react';

export default function IdlingEngine() {
    const fumesRef=useRef(null);
    const imageRef=useRef(null);

    useEffect(() => {
        const canvas=fumesRef.current;
        const c=canvas.getContext("2d"); //context
        let tSinceCircle=new Date().getTime();
    
        const startLoc=[206, 168];
        const speed=[1.8, .9];
        const freq=300; //ms to spawn circles
    
        class FumeCircle {
            constructor() {
                this.x=startLoc[0];
                this.y=startLoc[1];
                this.r=0;
                this.render();
                this.opacity=1;
            }
            update() {
                this.x+=speed[0]*(Math.random())*2;
                this.y+=speed[1]*(Math.random())*2;
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
            // c.drawImage(imageRef.current, 10, 10); //idling bus image
            
            let t=new Date().getTime();
    
            if (t-tSinceCircle>(freq*Math.random()*2)) { //±200
                tSinceCircle=t;
                circs.push(new FumeCircle());
            }
            
            for (let i=0; i<circs.length; i++) {
                circs[i].update();
            }
        }
        animate();
    }, []);
    


    return (<div style={{
        position: 'relative'
    }}>
        {/* Diesel Bus */}
        <img src="/images/idling.png" id="idling" alt="Idling" style={{
            position: 'absolute',
            top: 0,
            left: 0,
        }} ref={imageRef}/>
        {/* Idling Canvas */}
        <div style={{display: 'flex', position: 'absolute'}}>
            <canvas id="fumes" width="500px" height="300px" ref={fumesRef}></canvas>
            <div>
                <h2>Environment &amp; Health</h2>
                <p>
                    Noxious fumes are bad for children&apos;s developing lungs.
                </p>
            </div>
        </div>
    </div>);
}