class Car {
    constructor(x , y , width , height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;

        this.maxSpeed = 3;
        this.friction = 0.05;

        this.angle = 0;
        
        this.controls = new Controls();
    }

        update(){
          this.#move();
        }

        #move(){
              // if the car moves forward then accelerate it by the acceleration value
            if (this.controls.forward) {
                this.speed += this.acceleration;
            }
            // if the car moves reverse then accelerate it by the acceleration value
            if (this.controls.reverse) {
                this.speed -= this.acceleration;
            }
            // if the car runs forward the spped is not become more than maxspeed.
            if (this.speed > this.maxSpeed) {
                this.speed = this.maxSpeed;
            }
            // if the car is running to the reverse then max speed become half
            if (this.speed <- this.maxSpeed/2) {
                this.speed =- this.maxSpeed/2;
            }
            // add forward friction while stoping the car
            if (this.speed > 0) {
                this.speed -= this.friction
            }
            // backward friction while stoping when we reversing the car
              if (this.speed < 0) {
                this.speed += this.friction
            }
            // if the speed is less than friction then stop the car
            if (Math.abs(this.speed) < this.friction) {
                this.speed = 0
            }

            if (this.speed != 0) {
                const flip = this.speed>0? 1:-1;
                  if (this.controls.left) {
                    this.angle += 0.03;
                    }

                  if (this.controls.right) {
                     this.angle -= 0.03;
                    }
            // change the position of speed per frame
                this.x -= Math.sin(this.angle)*this.speed;
                this.y -= Math.cos(this.angle)*this.speed;
            // this.y -= this.speed;
            }
        }
        
    draw(ctx){
        ctx.save()
        ctx.translate(this.x , this.y)
        ctx.rotate(-this.angle)
        // beginPath() clears previous path commands, 
        // so the next shape starts fresh.
        ctx.beginPath();
        // draw a rectangle shape
        ctx.rect(
            -this.width/2 ,
            -this.height/2 ,
            this.width ,
            this.height
        );
        ctx.fill()
        ctx.restore()
    }
}